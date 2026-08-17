import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import FeaturedPosts from "../../components/FeaturedPosts/FeaturedPosts";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import CTASection from "../../components/CTASection/CTASection";
import Footer from "../../components/Footer/Footer";

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

        <FeaturedPosts />

        <TestimonialsSection />

        <CTASection />

        <Footer />
      </main>
    </div>
  );
};

export default Home;