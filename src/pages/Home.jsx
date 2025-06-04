import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaShippingFast, FaShieldAlt, FaHeadset, FaGift, 
         FaLeaf, FaCheck, FaSeedling, FaGlobeAmericas, FaRecycle } from 'react-icons/fa';
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
        </div>
        <div className="hero-image">
          <img src="../assets/background.jpg" alt="Fresh Produce" />
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