// api/transcribe.js
//
// Vercel serverless function: receives raw WAV/PCM audio bytes from the client,
// forwards them to AssemblyAI's EU endpoint, and returns the transcript ID.
//
// Residency: pinned to EU via vercel.json ("fra1") + using api.eu.assemblyai.com.
// Security: the AssemblyAI key stays in Vercel env vars (never sent to the client).

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const AAI_API_KEY = process.env.AAI_API_KEY;
    const AAI_BASE = process.env.AAI_BASE || "https://api.eu.assemblyai.com";

    if (!AAI_API_KEY) {
      return res.status(500).json({ error: "AssemblyAI API key not configured" });
    }

    // Forward audio to AssemblyAI EU endpoint
    const uploadResp = await fetch(`${AAI_BASE}/v2/upload`, {
      method: "POST",
      headers: {
        Authorization: AAI_API_KEY,
        "Transfer-Encoding": "chunked"
      },
      body: req.body
    });

    if (!uploadResp.ok) {
      const txt = await uploadResp.text();
      return res
        .status(uploadResp.status)
        .json({ error: "Upload failed", details: txt });
    }

    const { upload_url } = await uploadResp.json();

    // Request transcription with options
    const transcriptResp = await fetch(`${AAI_BASE}/v2/transcript`, {
      method: "POST",
      headers: {
        Authorization: AAI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        audio_url: upload_url,
        language_code: "no",       // Norwegian; change to "auto" if you prefer autodetect
        punctuate: true,
        format_text: true,
        disfluencies: false,
        speaker_labels: false
        // Add word_boost, custom_spelling, etc. here if needed
      })
    });

    if (!transcriptResp.ok) {
      const txt = await transcriptResp.text();
      return res
        .status(transcriptResp.status)
        .json({ error: "Transcription init failed", details: txt });
    }

    const transcript = await transcriptResp.json();
    res.status(200).json({ id: transcript.id });
  } catch (err) {
    console.error("Error in /api/transcribe:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
