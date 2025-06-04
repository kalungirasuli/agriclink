import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="grid-4">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link to="/">
                  <h2>DonalFarm</h2>
                </Link>
              </div>
              <p className="footer-desc">
                We are a family-owned farm dedicated to providing fresh, organic produce directly to your doorstep. Our mission is to promote sustainable farming practices while delivering the highest quality products.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><FaFacebookF /></a>
                <a href="#" className="social-link"><FaTwitter /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
                <a href="#" className="social-link"><FaPinterestP /></a>
                <a href="#" className="social-link"><FaYoutube /></a>
              </div>
            </div>
            
            <div className="footer-widget">
              <h3 className="widget-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h3 className="widget-title">Customer Service</h3>
              <ul className="footer-links">
                <li><Link to="/account">My Account</Link></li>
                <li><Link to="/cart">Shopping Cart</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/order-tracking">Order Tracking</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>
            
            <div className="footer-widget">
              <h3 className="widget-title">Contact Info</h3>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>123 Organic Farm Road, Greenville, CA 95463</span>
                </li>
                <li>
                  <FaPhoneAlt className="contact-icon" />
                  <span>(234) 109-6666</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span>info@donalfarm.com</span>
                </li>
              </ul>
              <div className="newsletter">
                <h4>Subscribe to our Newsletter</h4>
                <form className="newsletter-form">
                  <input type="email" placeholder="Your Email Address" />
                  <button type="submit" className="btn btn-primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container flex-between">
          <p className="copyright">&copy; {new Date().getFullYear()} DonalFarm. All Rights Reserved.</p>
          <div className="payment-methods">
            <img src="/src/assets/images/payment-methods.png" alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;