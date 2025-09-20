// api/transcribe.js
// Vercel serverless proxy → AssemblyAI
// Forwards multipart/form-data audio to AssemblyAI /v2/transcribe

const { Buffer } = require("buffer");

module.exports = async (req, res) => {
  // CORS (loose for now; tighten origin later)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Accept user-supplied key via header
  const headerKey =
    req.headers["x-api-key"] ||
    (req.headers["authorization"] && req.headers["authorization"].replace(/Bearer\s+/i, "").trim());

  if (!headerKey) {
    return res.status(400).json({ error: "Missing AssemblyAI API key (send in x-api-key or Authorization)" });
  }

  try {
    // Buffer incoming body
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const bodyBuffer = Buffer.concat(chunks);

    const contentType = (req.headers["content-type"] || "").toLowerCase();
    if (!contentType.startsWith("multipart/form-data")) {
      return res.status(400).json({ error: "Content-Type must be multipart/form-data for AssemblyAI transcriptions" });
    }

    // Headers for AssemblyAI
    const headers = {
      "authorization": headerKey,
      "content-type": contentType, // preserve boundary
      "accept": "application/json",
    };

    const upstream = await fetch("https://api.assemblyai.com/v2/transcribe", {
      method: "POST",
      headers,
      body: bodyBuffer,
    });

    const text = await upstream.text(); // forward raw response (JSON or error)
    res.status(upstream.status).send(text);
  } catch (e) {
    res.status(502).json({
      error: "Upstream request to AssemblyAI failed",
      detail: String(e?.message || e),
    });
  }
};

// IMPORTANT: keep body parser off so we can read the raw stream
module.exports.config = { api: { bodyParser: false } };
