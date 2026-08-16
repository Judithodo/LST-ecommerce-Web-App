import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

const Home = () => {
  return (
    <div className="home-page">
      <Header />

      <main>
        <section id="home">
          {/* <h1>Home</h1> */}
        </section>

        <Categories />

        <ProductsSection />
      </main>
    </div>
  );
};

export default Home;