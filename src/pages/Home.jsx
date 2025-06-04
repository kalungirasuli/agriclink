import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShippingFast, FaShieldAlt, FaHeadset, FaGift, 
         FaLeaf, FaCheck, FaSeedling, FaGlobeAmericas, FaRecycle } from 'react-icons/fa';
import backgroundImage from '../assets/background.jpg';
import './home.css';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Organic Apples',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
      price: 4.99,
      oldPrice: 6.99,
      category: 'Fruits And Vegetables',
    },
    {
      id: 3,
      name: 'Fresh Dairy Milk',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150',
      price: 2.99,
      oldPrice: 3.49,
      category: 'Milk And Dairies',
    },
    {
      id: 5,
      name: 'Raw Honey',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38',
      price: 8.99,
      oldPrice: null,
      category: 'Packaged Foods',
    },
    {
      id: 7,
      name: 'Free Range Eggs',
      image: 'https://images.unsplash.com/photo-1566643760847-2f4fad6a00f1',
      price: 9.99,
      oldPrice: 12.99,
      category: 'Poultry Products',
    }
  ];

  const categories = [
    {
      id: 1,
      name: 'Fresh Produce',
      icon: <FaLeaf />,
      image: 'https://images.unsplash.com/photo-1557844352-761f2565b576',
      description: 'Farm-fresh vegetables and fruits'
    },
    {
      id: 2,
      name: 'Dairy & Eggs',
      icon: <FaSeedling />,
      image: 'https://images.unsplash.com/photo-1544681280-d2891c5b06c8',
      description: 'Organic dairy products and free-range eggs'
    },
    {
      id: 3,
      name: 'Sustainable Products',
      icon: <FaGlobeAmericas />,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
      description: 'Eco-friendly and sustainable items'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      text: "The quality of organic produce is exceptional! Love how everything comes fresh from local farms.",
      date: "May 2025"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      text: "Great service and amazing selection of sustainable products. The free delivery is a huge plus!",
      date: "June 2025"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 4,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      text: "Love supporting local farmers through AgriLink. The raw honey is my favorite!",
      date: "June 2025"
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>AgriLink Market</h1>
          <p className="hero-subtitle">Farm Fresh • Sustainable • Direct to You</p>
          <p className="hero-description">
            Experience the finest organic produce sourced directly from local farmers, 
            delivered fresh to your doorstep.
          </p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">
              Shop Now <FaArrowRight />
            </Link>
            <Link to="/about" className="btn btn-outline">
              Our Story
            </Link>
          </div>
        </div>        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80" 
               loading='lazy' 
               alt="Fresh Produce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <FaShippingFast />
              </div>
              <h3>Free Delivery</h3>
              <p>Free shipping on orders above $50</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Quality Guarantee</h3>
              <p>100% organic certification</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaHeadset />
              </div>
              <h3>24/7 Support</h3>
              <p>Direct farmer connection</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Farm Fresh</h3>
              <p>Harvested to order</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Explore our wide range of organic products</p>
          </div>
          <div className="categories-grid">
            {categories.map(category => (
              <Link to="/shop" key={category.id} className="category-card">
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
                </div>
                <div className="category-content">
                  <span className="category-icon">{category.icon}</span>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <Link to="/shop" className="view-all">
              View All <FaArrowRight />
            </Link>
          </div>
          <div className="featured-products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">
                    {product.oldPrice ? (
                      <>
                        <span className="current-price">${product.price.toFixed(2)}</span>
                        <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="current-price">${product.price.toFixed(2)}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section">
        <div className="container">
          <div className="sustainability-content">
            <h2>Committed to Sustainability</h2>
            <p>We believe in farming practices that protect our environment and support local communities.</p>
            <div className="sustainability-stats">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Organic</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Local Farmers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">0</span>
                <span className="stat-label">Carbon Footprint</span>
              </div>
            </div>
            <Link to="/about" className="btn btn-secondary">
              Learn More <FaArrowRight />
            </Link>
          </div>
          <div className="sustainability-image">
            <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854" alt="Sustainable Farming" />
          </div>
        </div>
      </section>

      {/* Carbon Ecosystem Section */}
      <section className="carbon-ecosystem-section">
        <div className="container">
          <div className="carbon-grid">
            <div className="carbon-content">
              <h2>Our Carbon Ecosystem</h2>
              <p className="carbon-subtitle">Making a positive impact on our planet</p>
              <div className="carbon-features">
                <div className="carbon-feature">
                  <div className="carbon-icon">
                    <FaRecycle />
                  </div>
                  <div className="carbon-feature-content">
                    <h3>Carbon Neutral Delivery</h3>
                    <p>Our electric vehicle fleet and optimized routes minimize carbon footprint</p>
                  </div>
                </div>
                <div className="carbon-feature">
                  <div className="carbon-icon">
                    <FaSeedling />
                  </div>
                  <div className="carbon-feature-content">
                    <h3>Regenerative Farming</h3>
                    <p>Supporting farmers who use carbon-capturing agricultural practices</p>
                  </div>
                </div>
                <div className="carbon-feature">
                  <div className="carbon-icon">
                    <FaLeaf />
                  </div>
                  <div className="carbon-feature-content">
                    <h3>Zero-Waste Packaging</h3>
                    <p>100% biodegradable or reusable packaging materials</p>
                  </div>
                </div>
              </div>
              <div className="carbon-stats">
                <div className="carbon-stat">
                  <span className="stat-number">-2.5K</span>
                  <span className="stat-label">Tons CO₂ Offset</span>
                </div>
                <div className="carbon-stat">
                  <span className="stat-number">15K</span>
                  <span className="stat-label">Trees Planted</span>
                </div>
                <div className="carbon-stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Renewable Energy</span>
                </div>
              </div>
            </div>
            <div className="carbon-image">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80" 
                alt="Sustainable Farming Practices"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2>Customer Reviews</h2>
            <p>What our happy customers say about us</p>
          </div>
          <div className="reviews-grid">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <img src={review.image} alt={review.name} className="reviewer-image" />
                    <div>
                      <h4>{review.name}</h4>
                      <div className="review-date">{review.date}</div>
                    </div>
                  </div>
                  <div className="rating">
                    {[...Array(5)].map((_, index) => (
                      <FaCheck 
                        key={index} 
                        className={index < review.rating ? 'star-filled' : 'star-empty'} 
                      />
                    ))}
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
          <div className="reviews-footer">
            <Link to="/reviews" className="btn btn-secondary">
              View All Reviews <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for seasonal updates and special offers</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;