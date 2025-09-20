// api/status/[id].js
// Vercel serverless proxy for polling AssemblyAI transcription status

module.exports = async (req, res) => {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, x-api-key");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  // Accept user-supplied key via header
  const headerKey =
    req.headers["x-api-key"] ||
    (req.headers["authorization"] && req.headers["authorization"].replace(/Bearer\s+/i, "").trim());

  if (!headerKey) {
    return res.status(400).json({ error: "Missing API key (send in x-api-key or Authorization: Bearer ...)" });
  }

  try {
    const { id } = req.query; // dynamic part from [id].js

    const upstream = await fetch(`https://api.assemblyai.com/v2/transcribe/${id}`, {
      method: "GET",
      headers: {
        Authorization: headerKey,
        Accept: "application/json"
      }
    });

    const text = await upstream.text();
    res.status(upstream.status).send(text);
  } catch (e) {
    res.status(502).json({
      error: "Upstream request failed",
      detail: String(e?.message || e),
    });
  }
};
