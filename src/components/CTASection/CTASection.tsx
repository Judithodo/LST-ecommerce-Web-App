import "./CTASection.css";

import backgroundImage from "../../assets/images/cta/background.png";

const CTASection = () => {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="cta-section__overlay">
        <div className="cta-section__content">

          <p className="cta-section__subtitle">
            Designing Better Experience
          </p>

          <h2 className="cta-section__title">
            Problems trying to resolve the conflict between
          </h2>

          <p className="cta-section__description">
            Problems trying to resolve the conflict between the two
            major realms of Classical physics:
          </p>

          <p className="cta-section__price">
            $16.48
          </p>

          <button className="cta-section__button">
            Add Your Call to Action
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;