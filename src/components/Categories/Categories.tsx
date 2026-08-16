import CategoryCard from "../CategoryCard/CategoryCard";
import "./Categories.css";
import category1 from "../../assets/images/category-1.png";
import category2 from "../../assets/images/category-2.png";
import category3 from "../../assets/images/category-3.png";
import category4 from "../../assets/images/category-4.png";

const categories = [
  {
    id: 1,
    title: "Furniture",
    itemCount: 5,
    image:category2,
  },
  {
    id: 2,
    title: "Furniture",
    itemCount: 5,
    image:category1,
  },    
  {
    id: 3,
    title: "Furniture",
    itemCount: 5,
    image:category3,
  },
  {
    id: 4,
    title: "Furniture",
    itemCount: 5,
    image:category4,
  },
];

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories__container">
        <div className="categories__left">
          <CategoryCard
            title={categories[0].title}
            itemCount={categories[0].itemCount}
            image={categories[0].image}
          />
        </div>

        <div className="categories__right">
          <div className="categories__top">
            <CategoryCard
              title={categories[1].title}
              itemCount={categories[1].itemCount}
              image={categories[1].image}
            />
          </div>

          <div className="categories__bottom">
            <CategoryCard
              title={categories[2].title}
              itemCount={categories[2].itemCount}
              image={categories[2].image}
            />

            <CategoryCard
              title={categories[3].title}
              itemCount={categories[3].itemCount}
              image={categories[3].image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;