import "./FeaturedPosts.css";

interface FeaturedPostCardProps {
  image: string;
  title: string;
  description: string;
}

const FeaturedPostCard = ({
  image,
  title,
  description,
}: FeaturedPostCardProps) => {
  return (
    <article className="featured-post-card">
      <div className="featured-post-card__image-container">
        <img
          src={image}
          alt={title}
          className="featured-post-card__image"
        />

        <span className="featured-post-card__badge">
          NEW
        </span>
      </div>

      <div className="featured-post-card__content">
        <div className="featured-post-card__meta">
          <span className="featured-post-card__meta-blue">
            Google
          </span>

          <span>Trending</span>

          <span>New</span>
        </div>

        <h3 className="featured-post-card__title">
          {title}
        </h3>

        <p className="featured-post-card__description">
          {description}
        </p>

        <div className="featured-post-card__details">
          <span>
            <span className="featured-post-card__icon">◷</span>
            22nd April 2021
          </span>

          <span>
            <span className="featured-post-card__icon">◌</span>
            10 comments
          </span>
        </div>

        <a
          href="#"
          className="featured-post-card__learn-more"
        >
          Learn More
          <span>→</span>
        </a>
      </div>
    </article>
  );
};

export default FeaturedPostCard;