// api/transcribe.js
// Vercel serverless proxy → Mistral
// - Multipart/form-data  → forwards to /v1/audio/transcriptions
// - JSON (or ?mode=chat) → forwards to /v1/chat/completions
// Buffers the incoming body (no streaming), then forwards.

const { Buffer } = require("buffer");

module.exports = async (req, res) => {
  // CORS (tighten origin later)
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
    return res.status(400).json({ error: "Missing API key (send in x-api-key or Authorization: Bearer ...)" });
  }

  // Decide route
  const url = new URL(req.url, `http://${req.headers.host}`);
  const modeParam = url.searchParams.get("mode"); // e.g. ?mode=chat to force chat
  const contentType = (req.headers["content-type"] || "").toLowerCase();

  const isJson = contentType.startsWith("application/json");
  const goChat = modeParam === "chat" || isJson; // chat/completions when JSON or explicitly requested
  const upstreamUrl = goChat
    ? "https://api.mistral.ai/v1/chat/completions"
    : "https://api.mistral.ai/v1/audio/transcriptions";

  try {
    // Buffer incoming body
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const bodyBuffer = Buffer.concat(chunks);

    // Headers for upstream
    const headers = {
      // Mistral accepts either header — include both for safety.
      "Authorization": `Bearer ${headerKey}`,
      "x-api-key": headerKey,
      "accept": "application/json",
    };

    let body;
    if (goChat) {
      // JSON payload → forward as JSON
      headers["content-type"] = "application/json";
      body = bodyBuffer; // already JSON bytes
    } else {
      // Multipart payload → preserve original content-type (includes boundary)
      if (!contentType.startsWith("multipart/form-data")) {
        return res.status(400).json({ error: "Content-Type must be multipart/form-data for transcriptions" });
      }
      headers["content-type"] = contentType;
      body = bodyBuffer;
    }

    const upstream = await fetch(upstreamUrl, {
      method: "POST",
      headers,
      body,
    });

    const text = await upstream.text(); // pass through raw to keep error details
    res.status(upstream.status).send(text);
  } catch (e) {
    res.status(502).json({
      error: "Upstream request failed",
      detail: String(e?.message || e),
    });
  }
};

// IMPORTANT: keep body parser off so we can read the raw stream
module.exports.config = { api: { bodyParser: false } };
