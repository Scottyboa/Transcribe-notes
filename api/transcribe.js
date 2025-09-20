// api/transcribe.js
//
// Receives raw audio bytes from the browser and forwards to AssemblyAI (EU).
// Returns { id, endpoint } so the client can verify EU residency.
// Logs the Vercel region to function logs.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Region/debug logs (visible in Vercel function logs)
  try {
    console.log("Vercel region:", process.env.VERCEL_REGION || "unknown");
  } catch {}

  try {
    // Force EU endpoint
    const AAI_BASE = "https://api.eu.assemblyai.com";

    // Keep current behavior: client provides AAI key in header
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
      res.status(400).json({ error: "Missing AssemblyAI API key" });
      return;
    }

    // 1) Upload raw audio bytes to AssemblyAI EU
    console.log("Posting audio to:", `${AAI_BASE}/v2/upload`);
    const uploadResp = await fetch(`${AAI_BASE}/v2/upload`, {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Transfer-Encoding": "chunked"
      },
      body: req.body
    });

    if (!uploadResp.ok) {
      const txt = await uploadResp.text();
      res.status(uploadResp.status).json({ error: "Upload failed", details: txt });
      return;
    }

    const { upload_url } = await uploadResp.json();

    // 2) Create transcript
    console.log("Requesting transcript at:", `${AAI_BASE}/v2/transcript`);
    const transcriptResp = await fetch(`${AAI_BASE}/v2/transcript`, {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        audio_url: upload_url,
        language_code: "no",
        punctuate: true,
        format_text: true,
        disfluencies: false,
        speaker_labels: false
        // Add word_boost/custom_spelling/etc. here if needed
      })
    });

    if (!transcriptResp.ok) {
      const txt = await transcriptResp.text();
      res.status(transcriptResp.status).json({ error: "Transcription init failed", details: txt });
      return;
    }

    const transcript = await transcriptResp.json();

    // Return transcript id + endpoint used (so client can log it)
    res.status(200).json({ id: transcript.id, endpoint: AAI_BASE });
  } catch (err) {
    console.error("Error in /api/transcribe:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
}
