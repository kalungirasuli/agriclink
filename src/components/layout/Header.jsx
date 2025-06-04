import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes, 
         FaMapMarkerAlt, FaTruck, FaGlobe, FaPhoneAlt } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-header">
        <div className="container flex-between">
          <div className="top-header-left">
            <div className="promo-message">
              <span className="highlight">15% OFF</span>
              <span className="message">when you buy online and pick up in store!</span>
            </div>
          </div>
          <div className="top-header-right flex">
            <Link to="/store-locator" className="top-link">
              <FaMapMarkerAlt />
              <span>Find a Store</span>
            </Link>
            <Link to="/order-tracking" className="top-link">
              <FaTruck />
              <span>Track Order</span>
            </Link>
            <div className="language-selector">
              <FaGlobe />
              <select>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container flex-between">
          <div className="logo">
            <Link to="/">
              <h1>
                <span className="logo-text">agri</span>
                <span className="logo-highlight">link</span>
              </h1>
            </Link>
          </div>

          <div className="header-search-wrapper">
            <form className="search-bar">
              <div className="search-category">
                <select>
                  <option value="all">All Categories</option>
                  <option value="fruits">Fruits & Vegetables</option>
                  <option value="dairy">Dairy & Eggs</option>
                  <option value="meat">Meat & Poultry</option>
                </select>
              </div>
              <div className="search-input">
                <input type="text" placeholder="Search for products..." />
                <button type="submit" className="search-button">
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          <div className="header-contact">
            <FaPhoneAlt className="phone-icon" />
            <div className="contact-info">
              <p>Customer Support</p>
              <h3>(234) 109-6666</h3>
            </div>
          </div>

          <div className="header-actions">
            <Link to="/account" className="action-item" title="My Account">
              <FaUser />
              <span className="action-label">Account</span>
            </Link>
            <Link to="/wishlist" className="action-item" title="Wishlist">
              <FaHeart />
              <span className="action-label">Wishlist</span>
            </Link>
            <Link to="/cart" className="action-item cart" title="Shopping Cart">
              <div className="cart-icon-wrapper">
                <FaShoppingCart />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </div>
              <div className="cart-info">
                <span className="action-label">Cart</span>
                <span className="cart-total">$0.00</span>
              </div>
            </Link>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <nav className={`main-navigation ${isMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <div className="nav-wrapper">
            <ul className="nav-menu">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className={({ isActive }) => isActive ? 'active' : ''}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="nav-cta">
              <Link to="/shop" className="btn btn-primary">
                Order Online Now!
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;