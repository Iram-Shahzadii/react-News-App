import image from '../assets/news1.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-success text-dark mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || image}
        onError={(e) => {
          e.target.src = image; // Fallback image
        }}
        style={{ height: "200px", width: "330px", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No Title Available"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Bringing you the latest news, events, and updates from your community. Stay connected with what’s happening in your area"}
        </p>
        <a
          href={url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;