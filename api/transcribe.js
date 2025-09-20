// api/transcribe.js
// Vercel serverless proxy → AssemblyAI
// Flow: browser sends raw WAV bytes -> here -> upload to /v2/upload -> create /v2/transcript
// Returns the created transcript JSON (contains `id`)
const { Buffer } = require("buffer");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key, x-model, x-language-code, x-region");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const apiKey =
    req.headers["x-api-key"] ||
    (req.headers["authorization"] && req.headers["authorization"].replace(/Bearer\s+/i, "").trim());
  if (!apiKey) return res.status(400).json({ error: "Missing API key (send in x-api-key or Authorization: Bearer ...)" });

  // Optional knobs from browser
  const speechModel   = (req.headers["x-model"] || "universal").toString();
  const languageCode  = (req.headers["x-language-code"] || "").toString() || null; // e.g. "no"
  const baseHost      = (req.headers["x-region"] === "eu") ? "https://api.eu.assemblyai.com" : "https://api.assemblyai.com";

  try {
    // read raw bytes (audio)
    const chunks = [];
    for await (const c of req) chunks.push(c);
    const audioBytes = Buffer.concat(chunks);
    if (!audioBytes.length) return res.status(400).json({ error: "No audio bytes in request body" });

    // 1) Upload bytes
    const up = await fetch(`${baseHost}/v2/upload`, {
      method: "POST",
      headers: { Authorization: apiKey, "Content-Type": "application/octet-stream" },
      body: audioBytes
    });
    if (!up.ok) {
      const txt = await up.text();
      return res.status(up.status).send(txt || "Upload failed");
    }
    const { upload_url } = await up.json();

    // 2) Create transcript
    const body = {
      audio_url: upload_url,
      // When null or omitted, AssemblyAI uses "universal"
      speech_model: speechModel || null,
      // You can omit language_code to let AAI auto-detect; include when you know it.
      language_code: languageCode
    };

    const tr = await fetch(`${baseHost}/v2/transcript`, {
      method: "POST",
      headers: { Authorization: apiKey, "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const text = await tr.text(); // keep raw details on error
    return res.status(tr.status).send(text);
  } catch (err) {
    return res.status(502).json({ error: "Proxy failure", detail: String(err?.message || err) });
  }
};

// Keep body parser off so we can read the raw stream
module.exports.config = { api: { bodyParser: false } };
