 // api/transcribe.js
 export default async function handler(req, res) {
   if (req.method !== "POST") {
     return res.status(405).json({ error: "Method not allowed" });
   }

   try {
     const mistralKey = process.env.MISTRAL_API_KEY; // stored in Vercel env vars
     if (!mistralKey) {
       return res.status(500).json({ error: "Missing Mistral API key" });
     }

     // Forward form-data body as-is to Mistral
     const response = await fetch("https://api.mistral.ai/v1/audio/transcriptions", {
       method: "POST",
       headers: {
         "x-api-key": mistralKey,
       },
       body: req, // Node stream passes form-data through
     });

     const data = await response.json();
     res.status(response.status).json(data);
   } catch (err) {
     res.status(500).json({ error: err.message });
   }
 }
