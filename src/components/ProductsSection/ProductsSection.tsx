import ProductCard from "../ProductCard/ProductCard";
import "./ProductsSection.css";
import { useGetProductsQuery } from "../../services/api";

import product1 from "../../assets/images/products/product-1.png";
import product2 from "../../assets/images/products/product-2.png";
import product3 from "../../assets/images/products/product-3.png";
import product4 from "../../assets/images/products/product-4.png";
import product5 from "../../assets/images/products/product-5.png";
import product6 from "../../assets/images/products/product-6.png";
import product7 from "../../assets/images/products/product-7.png";
import product8 from "../../assets/images/products/product-8.png";
import product9 from "../../assets/images/products/product-9.png";
import product10 from "../../assets/images/products/product-10.png";

const productImages: Record<number, string> = {
  1: product1,
  2: product2,
  3: product3,
  4: product4,
  5: product5,
  6: product6,
  7: product7,
  8: product8,
  9: product9,
  10: product10,
};

const ProductsSection = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <section className="products-section">
        <div className="products-section__container">
          <div className="products-section__state">
            <p>Loading products...</p>
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="products-section">
        <div className="products-section__container">
          <div className="products-section__state">
            <p>Unable to load products. Please try again.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="products-section">
      <div className="products-section__container">

        <div className="products-section__header">
          <p className="products-section__subtitle">
            Featured Products
          </p>

          <h2 className="products-section__title">
            BESTSELLER PRODUCTS
          </h2>

          <p className="products-section__description">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics:
          </p>
        </div>

        <div className="products-grid">
          {data?.products.slice(0, 10).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              image={productImages[product.id] ?? product.thumbnail}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;