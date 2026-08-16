import "./TestimonialsSection.css";

import reginaImage from "../../assets/images/testimonials/regina.png";
import testimonialCollage from "../../assets/images/testimonials/testimonial-collage.png";

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-section__container">

        <div className="testimonials-section__content">

          <h2 className="testimonials-section__title">
            WHAT THEY SAY
            <br />
            ABOUT US
          </h2>

          <div className="testimonials-section__profile">
            <img
              src={reginaImage}
              alt="Regina Miles"
              className="testimonials-section__profile-image"
            />
          </div>

          <div
            className="testimonials-section__rating"
            aria-label="5 out of 5 stars"
          >
            ★★★★★
          </div>

          <p className="testimonials-section__text">
            Daily helps you see how many more days you need
            to work to reach your financial goal.
          </p>

          <p className="testimonials-section__name">
            Regina Miles
          </p>

          <p className="testimonials-section__role">
            Designer
          </p>

        </div>

        <div className="testimonials-section__image">
          <img
            src={testimonialCollage}
            alt="Customer testimonial gallery"
            className="testimonials-section__collage"
          />
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;