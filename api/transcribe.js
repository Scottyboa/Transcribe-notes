// api/transcribe.js
//
// Vercel function: takes raw audio blob from client, forwards to AssemblyAI EU.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // Use EU endpoint
    const AAI_BASE = "https://api.eu.assemblyai.com";
    // Still expect client to send its key (for now)
    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
      return res.status(400).json({ error: "Missing AssemblyAI API key" });
    }

    // Step 1: upload raw audio bytes to AssemblyAI
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
      return res.status(uploadResp.status).json({ error: txt });
    }

    const { upload_url } = await uploadResp.json();

    // Step 2: request a transcript
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
      })
    });

    if (!transcriptResp.ok) {
      const txt = await transcriptResp.text();
      return res.status(transcriptResp.status).json({ error: txt });
    }

    const transcript = await transcriptResp.json();
    res.status(200).json({ id: transcript.id, endpoint: AAI_BASE });
  } catch (err) {
    console.error("Error in /api/transcribe:", err);
    res.status(500).json({ error: err.message });
  }
}
