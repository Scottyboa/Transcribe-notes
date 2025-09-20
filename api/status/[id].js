// api/status/[id].js
const baseUS = "https://api.assemblyai.com/v2/transcript";
const baseEU = "https://api.eu.assemblyai.com/v2/transcript";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Authorization, x-api-key, x-region");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const apiKey =
    req.headers["x-api-key"] ||
    (req.headers["authorization"] && req.headers["authorization"].replace(/Bearer\s+/i, "").trim());
  if (!apiKey) return res.status(400).json({ error: "Missing API key (send in x-api-key or Authorization: Bearer ...)" });

  const { id } = req.query;
  const base = (req.headers["x-region"] === "eu") ? baseEU : baseUS;

  try {
    const upstream = await fetch(`${base}/${encodeURIComponent(id)}`, {
      headers: { Authorization: apiKey }
    });
    const text = await upstream.text();
    res.status(upstream.status).send(text);
  } catch (e) {
    res.status(502).json({ error: "Upstream request failed", detail: String(e?.message || e) });
  }
};
