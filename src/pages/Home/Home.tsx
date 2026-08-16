import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div className="home-page">
      <Header />

      <main>
        <section id="home">
          {/* Home content */}
        </section>

        <Categories />

        <ProductsSection />

        <ServicesSection />
      </main>
    </div>
  );
};

export default Home;