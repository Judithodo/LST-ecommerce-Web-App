import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="header-container">

        <a href="/" className="logo">
          Bandage
        </a>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#products">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">

          <button
            className="icon-button"
            aria-label="Search"
            type="button"
          >
            <Search size={24} />
          </button>

          <button
            className="icon-button"
            aria-label="Shopping cart"
            type="button"
          >
            <ShoppingCart size={24} />
          </button>

          <button
            className="menu-button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            type="button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {isMenuOpen && (
        <nav className="mobile-nav">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>

          <a href="#products" onClick={toggleMenu}>
            Product
          </a>

          <a href="#pricing" onClick={toggleMenu}>
            Pricing
          </a>

          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;