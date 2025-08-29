// api/transcribe.js
// Vercel serverless proxy for Mistral Voxtral Mini Transcribe.
// - Accepts multipart/form-data from the browser
// - Accepts the user's API key via header (x-api-key OR Authorization: Bearer ...)
// - Forwards to Mistral: https://api.mistral.ai/v1/audio/transcriptions
// - Returns Mistral's JSON response
//
// IMPORTANT: We disable body parsing to preserve the multipart boundary.

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  // --- Basic CORS (tighten `origin` to your domain when ready) ---
  const origin = req.headers.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // --- Get user-supplied key from headers ---
  // Prefer `x-api-key`, but also support `Authorization: Bearer <key>`
  const headerKey = req.headers["x-api-key"];
  const auth = req.headers["authorization"];
  const bearerKey = auth && auth.toLowerCase().startsWith("bearer ")
    ? auth.slice(7).trim()
    : undefined;

  const mistralKey = headerKey || bearerKey;
  if (!mistralKey) {
    return res.status(400).json({ error: "Missing API key. Send it in 'x-api-key' or 'Authorization: Bearer <key>'." });
  }

  // Preserve original multipart boundary/content-type from the browser
  const contentType = req.headers["content-type"];
  if (!contentType || !contentType.toLowerCase().startsWith("multipart/form-data")) {
    return res.status(400).json({ error: "Content-Type must be multipart/form-data with audio 'file' and 'model' fields." });
  }

  try {
    const upstream = await fetch("https://api.mistral.ai/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        "x-api-key": mistralKey,
        "content-type": contentType, // forward boundary intact
      },
      // Pipe the incoming multipart body directly to Mistral
      body: req,
    });

    // Relay Mistral's response transparently
    const text = await upstream.text();
    res.status(upstream.status).send(text);
  } catch (err) {
    res.status(502).json({ error: "Upstream request failed", detail: String(err?.message || err) });
  }
}
