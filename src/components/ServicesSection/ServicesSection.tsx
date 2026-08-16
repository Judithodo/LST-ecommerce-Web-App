import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-section__container">

        <button className="load-more-button" type="button">
          LOAD MORE PRODUCTS
        </button>

        <div className="services-section__header">
          <p className="services-section__subtitle">
            Featured Products
          </p>

          <h2 className="services-section__title">
            THE BEST SERVICES
          </h2>

          <p className="services-section__description">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="services-list">

          <article className="service-item">
            <h3 className="service-item__title">
              Easy win
            </h3>

            <p className="service-item__description">
              Get your best looking smile now
            </p>
          </article>

          <article className="service-item">
            <h3 className="service-item__title">
              Concrete
            </h3>

            <p className="service-item__description">
              Defalcate is more focused in helping you discover
              your most beautiful smile
            </p>
          </article>

          <article className="service-item">
            <h3 className="service-item__title">
              Hack growth
            </h3>

            <p className="service-item__description">
              Overcame any hurdle or any other problem
            </p>
          </article>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;