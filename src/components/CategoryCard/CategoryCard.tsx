import "./CategoryCard.css";

interface CategoryCardProps {
  title: string;
  itemCount: number;
  image: string;
}

const CategoryCard = ({
  title,
  itemCount,
  image,
}: CategoryCardProps) => {
  return (
    <article
      className="category-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="category-card__overlay">
        <span className="category-card__count">
          {itemCount} Items
        </span>

        <h3 className="category-card__title">
          {title}
        </h3>

        <a href="#products" className="category-card__link">
          Read More
        </a>
      </div>
    </article>
  );
};

export default CategoryCard;