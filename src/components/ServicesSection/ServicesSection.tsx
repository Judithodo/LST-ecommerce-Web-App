import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-section__container">

        {/* LOAD MORE BUTTON  */}
        <button className="load-more-button" type="button">
          LOAD MORE PRODUCTS
        </button>

        {/* SERVICES HEADER */}
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

        {/* SERVICES */}
        <div className="services-list">

          {/* EASY WINS */}
          <article className="service-item">

            <div className="service-item__icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="20"
                  cy="7"
                  r="4"
                  fill="#23A6F0"
                />

                <path
                  d="M5 11C10 9.5 15 10.5 20 14V34C15 30.5 10 29.5 5 31V11Z"
                  fill="#23A6F0"
                />

                <path
                  d="M35 11C30 9.5 25 10.5 20 14V34C25 30.5 30 29.5 35 31V11Z"
                  fill="#23A6F0"
                />
              </svg>
            </div>

            <h3 className="service-item__title">
              Easy Wins
            </h3>

            <p className="service-item__description">
              Get your best looking smile now!
            </p>

          </article>


          {/* CONCRETE */}
          <article className="service-item">

            <div className="service-item__icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="7"
                  y="5"
                  width="26"
                  height="30"
                  stroke="#23A6F0"
                  strokeWidth="3"
                />

                <path
                  d="M13 12H18"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M22 12H27"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M13 18H18"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M22 18H27"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M13 24H18"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M22 24H27"
                  stroke="#23A6F0"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <h3 className="service-item__title">
              Concrete
            </h3>

            <p className="service-item__description">
              Defalcate is more focused in helping you discover
              your most beautiful smile
            </p>

          </article>


          {/* HACK GROWTH */}
          <article className="service-item">

            <div className="service-item__icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 30L17 20L23 25L34 11"
                  stroke="#23A6F0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M26 11H34V19"
                  stroke="#23A6F0"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="service-item__title">
              Hack Growth
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