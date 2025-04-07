// recording.js
// Updated recording module without encryption/HMAC mechanisms and with OfflineAudioContext processing.

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32-bit signed integer
  }
  // Convert to an unsigned 32-bit integer and return as string.
  return (hash >>> 0).toString();
}

const DEBUG = true;
function logDebug(message, ...optionalParams) {
  if (DEBUG) {
    console.debug(new Date().toISOString(), "[DEBUG]", message, ...optionalParams);
  }
}
function logInfo(message, ...optionalParams) {
  console.info(new Date().toISOString(), "[INFO]", message, ...optionalParams);
}
function logError(message, ...optionalParams) {
  console.error(new Date().toISOString(), "[ERROR]", message, ...optionalParams);
}

const MIN_CHUNK_DURATION = 120000; // 120 seconds
const MAX_CHUNK_DURATION = 120000; // 120 seconds
const watchdogThreshold = 1500;   // 1.5 seconds with no frame
const backendUrl = "https://transcribe-notes-dnd6accbgwc9gdbz.norwayeast-01.azurewebsites.net/";

let mediaStream = null;
let audioReader = null;
let recordingStartTime = 0;
// New variable to accumulate time from all active segments
let accumulatedRecordingTime = 0;
let recordingTimerInterval;
let completionTimerInterval = null;
let completionStartTime = 0;
let groupId = null;
let chunkNumber = 1;
let manualStop = false;
let transcriptChunks = {};
let pollingIntervals = {};

let chunkStartTime = 0;
let lastFrameTime = 0;
let chunkTimeoutId;

let chunkProcessingLock = false;
let pendingStop = false;
let finalChunkProcessed = false;
let recordingPaused = false;
let audioFrames = []; // Buffer for audio frames

// --- Utility Functions ---
function updateStatusMessage(message, color = "#333") {
  const statusElem = document.getElementById("statusMessage");
  if (statusElem) {
    statusElem.innerText = message;
    statusElem.style.color = color;
  }
}

function formatTime(ms) {
  const totalSec = Math.floor(ms / 1000);
  if (totalSec < 60) {
    return totalSec + " sec";
  } else {
    const minutes = Math.floor(totalSec / 60);
    const seconds = totalSec % 60;
    return minutes + " min" + (seconds > 0 ? " " + seconds + " sec" : "");
  }
}

function updateRecordingTimer() {
  // Timer now shows accumulated time plus current active segment time
  const elapsed = accumulatedRecordingTime + (Date.now() - recordingStartTime);
  const timerElem = document.getElementById("recordTimer");
  if (timerElem) {
    timerElem.innerText = "Recording Timer: " + formatTime(elapsed);
  }
}

function stopMicrophone() {
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
    mediaStream = null;
    logInfo("Microphone stopped.");
  }
  if (audioReader) {
    audioReader.cancel();
    audioReader = null;
  }
}

// --- Base64 Helper Functions ---
function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
function base64ToArrayBuffer(base64) {
  const binary = window.atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

// --- Device Token Management ---
function getDeviceToken() {
  let token = localStorage.getItem("device_token");
  if (!token) {
    token = crypto.randomUUID();
    localStorage.setItem("device_token", token);
  }
  return token;
}

// --- API Key Retrieval ---
// With encryption removed, we now simply get the API key from sessionStorage.
function getAPIKey() {
  return sessionStorage.getItem("user_api_key");
}

// --- File Blob Processing ---
// Previously used for encryption, now simply returns the original blob along with markers.
async function encryptFileBlob(blob) {
  const apiKey = getAPIKey();
  if (!apiKey) throw new Error("API key not available");
  const deviceToken = getDeviceToken();
  const apiKeyMarker = hashString(apiKey);
  const deviceMarker = hashString(deviceToken);
  // Return the original blob without any encryption; iv and salt are empty.
  return {
    encryptedBlob: blob,
    iv: "",
    salt: "",
    apiKeyMarker,
    deviceMarker
  };
}

// --- OfflineAudioContext Processing ---
// This function takes a Float32Array of interleaved audio samples, the original sample rate, 
// and the number of channels. It converts the audio to mono (by averaging channels if needed),
// resamples it to 16kHz, and applies a 0.3-second linear fade‑in and fade‑out.
// It returns a WAV Blob.
async function processAudioUsingOfflineContext(pcmFloat32, originalSampleRate, numChannels) {
  const targetSampleRate = 16000;
  
  // Determine number of frames from interleaved data
  const numFrames = pcmFloat32.length / numChannels;
  
  // Create an AudioBuffer in a temporary AudioContext
  let tempCtx = new AudioContext();
  let originalBuffer = tempCtx.createBuffer(numChannels, numFrames, originalSampleRate);
  
  // If multi-channel, deinterleave and copy data; if mono, copy directly.
  if (numChannels === 1) {
    originalBuffer.copyToChannel(pcmFloat32, 0);
  } else {
    // Deinterleave channels
    for (let ch = 0; ch < numChannels; ch++) {
      let channelData = new Float32Array(numFrames);
      for (let i = 0; i < numFrames; i++) {
        channelData[i] = pcmFloat32[i * numChannels + ch];
      }
      originalBuffer.copyToChannel(channelData, ch);
    }
  }
  // Convert to mono by averaging channels if needed.
  let monoBuffer;
  if (numChannels > 1) {
    let monoData = new Float32Array(numFrames);
    for (let i = 0; i < numFrames; i++) {
      let sum = 0;
      for (let ch = 0; ch < numChannels; ch++) {
        sum += originalBuffer.getChannelData(ch)[i];
      }
      monoData[i] = sum / numChannels;
    }
    monoBuffer = tempCtx.createBuffer(1, numFrames, originalSampleRate);
    monoBuffer.copyToChannel(monoData, 0);
  } else {
    monoBuffer = originalBuffer;
  }
  tempCtx.close();
  
  // Set up OfflineAudioContext for resampling
  const duration = monoBuffer.duration;
  const offlineCtx = new OfflineAudioContext(1, targetSampleRate * duration, targetSampleRate);
  
  const source = offlineCtx.createBufferSource();
  source.buffer = monoBuffer;
  
  // Create a gain node for fade‑in and fade‑out (0.3 seconds each)
  const gainNode = offlineCtx.createGain();
  const fadeDuration = 0.3;
  gainNode.gain.setValueAtTime(0, 0);
  gainNode.gain.linearRampToValueAtTime(1, fadeDuration);
  gainNode.gain.setValueAtTime(1, duration - fadeDuration);
  gainNode.gain.linearRampToValueAtTime(0, duration);
  
  source.connect(gainNode).connect(offlineCtx.destination);
  source.start(0);
  
  const renderedBuffer = await offlineCtx.startRendering();
  
  // Get the processed audio data (mono)
  const processedData = renderedBuffer.getChannelData(0);
  // Convert the processed Float32Array to 16-bit PCM and encode as WAV using the existing encodeWAV function.
  const processedInt16 = floatTo16BitPCM(processedData);
  const wavBlob = encodeWAV(processedInt16, targetSampleRate, 1);
  return wavBlob;
}

// --- HMAC and Request Signing ---
// Removed: computeHMAC and signUploadRequest functions are no longer needed.

// --- Upload Chunk Function ---
// Adjusted to remove encryption and signing parameters.
async function uploadChunk(blob, currentChunkNumber, extension, mimeType, isLast = false, currentGroup) {
  let encryptionResult;
  try {
    encryptionResult = await encryptFileBlob(blob);
  } catch (err) {
    console.error("Error processing file blob:", err);
    throw err;
  }
  const encryptedBlob = encryptionResult.encryptedBlob;

  const formData = new FormData();
  formData.append("file", encryptedBlob, `chunk_${currentChunkNumber}.${extension}`);
  formData.append("group_id", currentGroup);
  formData.append("chunk_number", currentChunkNumber);
  formData.append("api_key", getAPIKey());
  formData.append("iv", ""); // No encryption, so empty.
  formData.append("salt", ""); // No encryption, so empty.
  formData.append("api_key_marker", encryptionResult.apiKeyMarker);
  formData.append("device_marker", encryptionResult.deviceMarker);
  formData.append("device_token", getDeviceToken());
  // Signature is removed.
  if (isLast) {
    formData.append("last_chunk", "true");
  }
  
  let attempts = 0;
  const retryDelay = 4000; // 4 seconds
  const maxRetryTime = 60000; // 1 minute
  const startTime = Date.now();
  while (true) {
    try {
      const response = await fetch(`${backendUrl}/upload`, {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server responded with status ${response.status}: ${errorText}`);
      }
      const result = await response.json();
      console.info(`Upload successful for chunk ${currentChunkNumber}`, { session_id: result.session_id });
      return result;
    } catch (error) {
      attempts++;
      console.error(`Upload error for chunk ${currentChunkNumber} on attempt ${attempts}:`, error);
      if (Date.now() - startTime >= maxRetryTime) {
        updateStatusMessage("Failed to upload chunk " + currentChunkNumber + " after maximum retry time", "red");
        throw new Error("Maximum retry time exceeded for chunk " + currentChunkNumber);
      }
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }
}

// --- Audio Chunk Processing ---
async function processAudioChunkInternal(force = false) {
  if (audioFrames.length === 0) {
    logDebug("No audio frames to process.");
    return;
  }
  logInfo(`Processing ${audioFrames.length} audio frames for chunk ${chunkNumber}.`);
  const framesToProcess = audioFrames;
  audioFrames = []; // Clear the buffer
  const sampleRate = framesToProcess[0].sampleRate;
  const numChannels = framesToProcess[0].numberOfChannels;
  let pcmDataArray = [];
  for (const frame of framesToProcess) {
    const numFrames = frame.numberOfFrames;
    if (numChannels === 1) {
      const channelData = new Float32Array(numFrames);
      frame.copyTo(channelData, { planeIndex: 0 });
      pcmDataArray.push(channelData);
    } else {
      let channelData = [];
      for (let c = 0; c < numChannels; c++) {
        const channelArray = new Float32Array(numFrames);
        frame.copyTo(channelArray, { planeIndex: c });
        channelData.push(channelArray);
      }
      const interleaved = new Float32Array(numFrames * numChannels);
      for (let i = 0; i < numFrames; i++) {
        for (let c = 0; c < numChannels; c++) {
          interleaved[i * numChannels + c] = channelData[c][i];
        }
      }
      pcmDataArray.push(interleaved);
    }
    frame.close();
  }
  const totalLength = pcmDataArray.reduce((sum, arr) => sum + arr.length, 0);
  const pcmFloat32 = new Float32Array(totalLength);
  let offset = 0;
  for (const arr of pcmDataArray) {
    pcmFloat32.set(arr, offset);
    offset += arr.length;
  }
  
  // Process the raw audio samples using OfflineAudioContext:
  // This converts the audio to mono, resamples to 16kHz, and applies 0.3s fade-in/out.
  const wavBlob = await processAudioUsingOfflineContext(pcmFloat32, sampleRate, numChannels);
  
  const mimeType = "audio/wav";
  const extension = "wav";
  const currentChunk = chunkNumber;
  logInfo(`Uploading chunk ${currentChunk}`);
  uploadChunk(wavBlob, currentChunk, extension, mimeType, force, groupId)
    .then(result => {
      if (result && result.session_id) {
        logInfo(`Chunk ${currentChunk} uploaded successfully. Starting polling.`);
        pollChunkTranscript(currentChunk, groupId);
      } else {
        logInfo(`Chunk ${currentChunk} upload did not return a session ID; skipping polling.`);
      }
    })
    .catch(err => logError(`Upload error for chunk ${currentChunk}:`, err));
  chunkNumber++;
}

async function safeProcessAudioChunk(force = false) {
  if (manualStop && finalChunkProcessed) {
    logDebug("Final chunk already processed; skipping safeProcessAudioChunk.");
    return;
  }
  if (chunkProcessingLock) {
    logDebug("Chunk processing is locked; skipping safeProcessAudioChunk.");
    return;
  }
  chunkProcessingLock = true;
  await processAudioChunkInternal(force);
  chunkProcessingLock = false;
  if (pendingStop) {
    pendingStop = false;
    finalizeStop();
  }
}

function finalizeStop() {
  completionStartTime = Date.now();
  completionTimerInterval = setInterval(() => {
    const timerElem = document.getElementById("transcribeTimer");
    if (timerElem) {
      timerElem.innerText = "Completion Timer: " + formatTime(Date.now() - completionStartTime);
    }
  }, 1000);
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const pauseResumeButton = document.getElementById("pauseResumeButton");
  if (startButton) startButton.disabled = false;
  if (stopButton) stopButton.disabled = true;
  if (pauseResumeButton) pauseResumeButton.disabled = true;
  logInfo("Recording stopped by user. Finalizing transcription.");
}

function pollChunkTranscript(chunkNum, currentGroup) {
  const pollStart = Date.now();
  pollingIntervals[chunkNum] = setInterval(async () => {
    if (groupId !== currentGroup) {
      clearInterval(pollingIntervals[chunkNum]);
      logDebug(`Polling stopped for chunk ${chunkNum} due to session change.`);
      return;
    }
    if (Date.now() - pollStart > 120000) {
      logInfo(`Polling timeout for chunk ${chunkNum}`);
      clearInterval(pollingIntervals[chunkNum]);
      return;
    }
    try {
      const response = await fetch(`${backendUrl}/fetch_chunk`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: currentGroup, chunk_number: chunkNum })
      });
      if (response.status === 200) {
        const data = await response.json();
        transcriptChunks[chunkNum] = data.transcript;
        updateTranscriptionOutput();
        clearInterval(pollingIntervals[chunkNum]);
        logInfo(`Transcript received for chunk ${chunkNum}`);
      } else {
        logDebug(`Chunk ${chunkNum} transcript not ready yet.`);
      }
    } catch (err) {
      logError(`Error polling for chunk ${chunkNum}:`, err);
    }
  }, 3000);
}

function updateTranscriptionOutput() {
  const sortedKeys = Object.keys(transcriptChunks).map(Number).sort((a, b) => a - b);
  let combinedTranscript = "";
  sortedKeys.forEach(key => {
    combinedTranscript += transcriptChunks[key] + " ";
  });
  const transcriptionElem = document.getElementById("transcription");
  if (transcriptionElem) {
    transcriptionElem.value = combinedTranscript.trim();
  }
  if (manualStop && Object.keys(transcriptChunks).length >= (chunkNumber - 1)) {
    clearInterval(completionTimerInterval);
    updateStatusMessage("Transcription finished!", "green");
    logInfo("Transcription complete.");
  }
}

function floatTo16BitPCM(input) {
  const output = new Int16Array(input.length);
  for (let i = 0; i < input.length; i++) {
    let s = Math.max(-1, Math.min(1, input[i]));
    output[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
  }
  return output;
}

function encodeWAV(samples, sampleRate, numChannels) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  function writeString(offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * 2, true);
  view.setUint16(32, numChannels * 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, samples.length * 2, true);
  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    view.setInt16(offset, samples[i], true);
  }
  return new Blob([view], { type: 'audio/wav' });
}

function scheduleChunk() {
  if (manualStop || recordingPaused) {
    logDebug("Scheduler suspended due to manual stop or pause.");
    return;
  }
  const elapsed = Date.now() - chunkStartTime;
  const timeSinceLast = Date.now() - lastFrameTime;
  if (elapsed >= MAX_CHUNK_DURATION || (elapsed >= MIN_CHUNK_DURATION && timeSinceLast >= watchdogThreshold)) {
    logInfo("Scheduling condition met; processing chunk.");
    safeProcessAudioChunk();
    chunkStartTime = Date.now();
    scheduleChunk();
  } else {
    chunkTimeoutId = setTimeout(scheduleChunk, 500);
  }
}

function resetRecordingState() {
  Object.values(pollingIntervals).forEach(interval => clearInterval(interval));
  pollingIntervals = {};
  clearTimeout(chunkTimeoutId);
  clearInterval(recordingTimerInterval);
  transcriptChunks = {};
  audioFrames = [];
  chunkStartTime = Date.now();
  lastFrameTime = Date.now();
  manualStop = false;
  finalChunkProcessed = false;
  recordingPaused = false;
  groupId = Date.now().toString();
  chunkNumber = 1;
  // Reset accumulated recording time for a new session
  accumulatedRecordingTime = 0;
}

function initRecording() {
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const pauseResumeButton = document.getElementById("pauseResumeButton");
  if (!startButton || !stopButton || !pauseResumeButton) return;

  startButton.addEventListener("click", async () => {
    // Retrieve the API key before starting.
    const apiKey = getAPIKey();
    if (!apiKey || !apiKey.startsWith("sk-")) {
      alert("Please enter a valid OpenAI API key before starting the recording.");
      return;
    }
    resetRecordingState();
    const transcriptionElem = document.getElementById("transcription");
    if (transcriptionElem) transcriptionElem.value = "";
    
    updateStatusMessage("Recording...", "green");
    logInfo("Recording started.");
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordingStartTime = Date.now();
      recordingTimerInterval = setInterval(updateRecordingTimer, 1000);
      
      const track = mediaStream.getAudioTracks()[0];
      const processor = new MediaStreamTrackProcessor({ track: track });
      audioReader = processor.readable.getReader();
      
      function readLoop() {
        audioReader.read().then(({ done, value }) => {
          if (done) {
            logInfo("Audio track reading complete.");
            return;
          }
          lastFrameTime = Date.now();
          audioFrames.push(value);
          readLoop();
        }).catch(err => {
          logError("Error reading audio frames", err);
        });
      }
      readLoop();
      scheduleChunk();
      logInfo("MediaStreamTrackProcessor started, reading audio frames.");
      startButton.disabled = true;
      stopButton.disabled = false;
      pauseResumeButton.disabled = false;
      pauseResumeButton.innerText = "Pause Recording";
    } catch (error) {
      updateStatusMessage("Microphone access error: " + error, "red");
      logError("Microphone access error", error);
    }
  });

  pauseResumeButton.addEventListener("click", async () => {
    if (!mediaStream) return;
    const track = mediaStream.getAudioTracks()[0];
    if (track.enabled) {
      await safeProcessAudioChunk(false);
      accumulatedRecordingTime += Date.now() - recordingStartTime;
      track.enabled = false;
      recordingPaused = true;
      clearInterval(recordingTimerInterval);
      clearTimeout(chunkTimeoutId);
      pauseResumeButton.innerText = "Resume Recording";
      updateStatusMessage("Recording paused", "orange");
      logInfo("Recording paused; current chunk uploaded.");
    } else {
      track.enabled = true;
      recordingPaused = false;
      recordingStartTime = Date.now();
      recordingTimerInterval = setInterval(updateRecordingTimer, 1000);
      pauseResumeButton.innerText = "Pause Recording";
      updateStatusMessage("Recording...", "green");
      chunkStartTime = Date.now();
      scheduleChunk();
      logInfo("Recording resumed.");
    }
  });

  stopButton.addEventListener("click", async () => {
    updateStatusMessage("Finishing transcription...", "blue");
    manualStop = true;
    clearTimeout(chunkTimeoutId);
    clearInterval(recordingTimerInterval);
    stopMicrophone();
    chunkStartTime = 0;
    lastFrameTime = 0;
    await new Promise(resolve => setTimeout(resolve, 200));
    if (chunkProcessingLock) {
      pendingStop = true;
      logDebug("Chunk processing locked at stop; setting pendingStop.");
    } else {
      await safeProcessAudioChunk(true);
      finalChunkProcessed = true;
      finalizeStop();
      logInfo("Stop button processed; final chunk handled.");
    }
  });
}

export { initRecording };
