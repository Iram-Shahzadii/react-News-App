import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles || []))
      .catch((err) => console.error("Error fetching news:", err));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-primary">News</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">No news available right now.</p>
      )}
    </div>
  );
};

export default NewsBoard;



