import type { Product } from "../../types/product";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  image: string;
}

const ProductCard = ({ product, image }: ProductCardProps) => {
  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100;

  return (
    <article className="product-card">
      <div className="product-card__image-container">
        <img
          src={image}
          alt={product.title}
          className="product-card__image"
        />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">
          {product.title}
        </h3>

        <p className="product-card__category">
          {product.category}
        </p>

        <div className="product-card__prices">
          <span className="product-card__old-price">
            ${product.price.toFixed(2)}
          </span>

          <span className="product-card__price">
            ${discountedPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;