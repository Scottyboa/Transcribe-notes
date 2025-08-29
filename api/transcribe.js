const { Readable } = require("stream");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const headerKey =
    req.headers["x-api-key"] ||
    (req.headers["authorization"] && req.headers["authorization"].replace(/Bearer\s+/i, "").trim());

  if (!headerKey) return res.status(400).json({ error: "Missing API key" });

  try {
    const upstream = await fetch("https://api.mistral.ai/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        "x-api-key": headerKey,
        "content-type": req.headers["content-type"],
      },
      body: Readable.toWeb(req),
    });

    // Buffer the full body and return JSON (works with response.json() in frontend)
    const text = await upstream.text();
    res.status(upstream.status).send(text);
  } catch (e) {
    res.status(502).json({ error: "Upstream request failed", detail: String(e?.message || e) });
  }
};

module.exports.config = { api: { bodyParser: false } };
