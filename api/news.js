// api/news.js
export default async function handler(req, res) {
  const category = req.query.category || "general";
  const apiKey = process.env.VITE_API_KEY; // API key Vercel env se ayegi

  if (!apiKey) {
    return res.status(500).json({ error: "Missing API key on server" });
  }

  try {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${encodeURIComponent(category)}&apiKey=${apiKey}`;
    const r = await fetch(url);
    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json(data);
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Server error", message: err.message });
  }
}