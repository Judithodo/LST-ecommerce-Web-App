import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Footer */}
      <div className="footer__top">
        <div className="footer__brand">
          <h2>Bandage</h2>
        </div>

        <div className="footer__socials">
          <a href="#" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="4"
                y="4"
                width="16"
                height="16"
                rx="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>

          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M18.9 3H22l-6.8 7.8L23 21h-6.1l-4.8-6.3L6.6 21H3.5l7.2-8.3L3 3h6.2l4.4 5.8L18.9 3Zm-1.1 16h1.7L8.3 4.9H6.5L17.8 19Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer__divider"></div>

      {/* Main Footer */}
      <div className="footer__main">

        <div className="footer__column">
          <h3>Company Info</h3>

          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer__column">
          <h3>Legal</h3>

          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer__column">
          <h3>Features</h3>

          <a href="#">Business Marketing</a>
          <a href="#">User Analytic</a>
          <a href="#">Live Chat</a>
          <a href="#">Unlimited Support</a>
        </div>

        <div className="footer__column">
          <h3>Resources</h3>

          <a href="#">IOS & Android</a>
          <a href="#">Watch a Demo</a>
          <a href="#">Customers</a>
          <a href="#">API</a>
        </div>

        <div className="footer__column footer__contact">
          <h3>Get In Touch</h3>

          <div className="footer__subscribe">
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
            />

            <button type="button">
              Subscribe
            </button>
          </div>

          <p>
            Lorem imp sum dolor Amit
          </p>
        </div>

      </div>

    
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p>
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;