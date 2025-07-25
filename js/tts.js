// js/TTS.js
// Module to handle text-to-speech playback using OpenAI's gpt-4o-mini-tts model

// Immediately attach event listener on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  const ttsButton = document.getElementById('ttsButton');
  if (!ttsButton) {
    console.warn('TTS button not found in the DOM.');
    return;
  }
  ttsButton.addEventListener('click', playTTS);
});

async function playTTS() {
  const apiKey = sessionStorage.getItem('user_api_key');
  if (!apiKey) {
    alert('API key not found. Please log in or set your API key first.');
    return;
  }

  const textArea = document.getElementById('generatedNote');
  if (!textArea) {
    console.error('Generated note textarea not found.');
    return;
  }

  const text = textArea.value.trim();
  if (!text) {
    alert('No text available for TTS. Please generate a note first.');
    return;
  }

  try {
    // Call OpenAI TTS endpoint with gpt-4o-mini-tts
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini-tts',  // Using the mini TTS model
        voice: 'alloy',            // Choose a built-in voice or adjust as needed
        instructions: '',          // Optional instructions for style/accent
        input: text
      })
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('TTS API error:', err);
      alert(`TTS failed: ${err.error?.message || response.statusText}`);
      return;
    }

    const audioBuffer = await response.arrayBuffer();
    const blob = new Blob([audioBuffer], { type: 'audio/mpeg' });
    const url = URL.createObjectURL(blob);

    const audio = new Audio(url);
    audio.play();
  } catch (e) {
    console.error('Error during TTS playback:', e);
    alert('An error occurred during TTS playback. Check console for details.');
  }
}
