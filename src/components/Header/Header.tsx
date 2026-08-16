import {
  ChevronDown,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
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

        {/* Logo */}
        <a href="/" className="logo">
          Bandage
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#home">Home</a>

          <button className="shop-dropdown" type="button">
            <span>Shop</span>
            <ChevronDown size={14} />
          </button>

          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
          <a href="#pages">Pages</a>
        </nav>

        {/* Right Side Actions */}
        <div className="header-actions">

          <button
            className="login-button"
            type="button"
          >
            <User size={18} />
            <span>Login / Register</span>
          </button>

          <button
            className="icon-button"
            aria-label="Search"
            type="button"
          >
            <Search size={20} />
          </button>

          <button
            className="icon-button"
            aria-label="Shopping cart"
            type="button"
          >
            <ShoppingCart size={20} />
          </button>

          <button
            className="menu-button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            type="button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>

          <button className="mobile-shop" type="button">
            <span>Shop</span>
            <ChevronDown size={18} />
          </button>

          <a href="#about" onClick={toggleMenu}>
            About
          </a>

          <a href="#blog" onClick={toggleMenu}>
            Blog
          </a>

          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>

          <a href="#pages" onClick={toggleMenu}>
            Pages
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;