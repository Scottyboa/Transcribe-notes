// CommonJS export to avoid module detection quirks
module.exports = async (req, res) => {
  const origin = req.headers.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const headerKey = req.headers["x-api-key"] ||
    (req.headers["authorization"] && req.headers["authorization"].replace(/Bearer\s+/i, "").trim());

  if (!headerKey) return res.status(400).json({ error: "Missing API key (use x-api-key or Authorization: Bearer …)" });

  const contentType = req.headers["content-type"] || "";
  if (!contentType.toLowerCase().startsWith("multipart/form-data")) {
    return res.status(400).json({ error: "Content-Type must be multipart/form-data" });
  }

  try {
    const upstream = await fetch("https://api.mistral.ai/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        "x-api-key": headerKey,
        "content-type": contentType,
      },
      body: req,
    });
    const text = await upstream.text();
    res.status(upstream.status).send(text);
  } catch (e) {
    res.status(502).json({ error: "Upstream request failed", detail: String(e?.message || e) });
  }
};
module.exports.config = { api: { bodyParser: false } };
