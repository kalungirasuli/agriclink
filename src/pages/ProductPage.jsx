import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaShareAlt, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  // Mock data for demonstration
  const mockProducts = [
    {
      id: 1,
      name: 'Organic Apples',
      image: '/src/assets/images/products/apples.jpg',
      description: 'Fresh organic apples grown without pesticides. Perfect for healthy snacking and cooking.',
      longDescription: 'Our organic apples are grown in our sustainable orchards without the use of synthetic pesticides or fertilizers. These crisp, juicy apples are harvested at peak ripeness to ensure maximum flavor and nutritional value. Perfect for healthy snacking, baking, or adding to your favorite recipes.',
      price: 4.99,
      oldPrice: 6.99,
      category: 'Fruits And Vegetables',
      rating: 4.5,
      isOrganic: true,
      sku: 'ORG-APL-001',
      stock: 50,
      weight: '1 kg',
      tags: ['organic', 'fruit', 'fresh'],
      reviews: [
        { id: 1, user: 'John D.', rating: 5, comment: 'Delicious and fresh! Will buy again.', date: '2023-10-15' },
        { id: 2, user: 'Sarah M.', rating: 4, comment: 'Great quality apples, very crisp and sweet.', date: '2023-10-10' }
      ],
      nutritionalInfo: {
        calories: '52 kcal',
        protein: '0.3g',
        carbs: '14g',
        fiber: '2.4g',
        sugar: '10g'
      },
      relatedProducts: [2, 5, 8]
    },
    {
      id: 2,
      name: 'Free Range Eggs',
      image: '/src/assets/images/products/eggs.jpg',
      description: 'Farm fresh free-range eggs from happy chickens. Rich in flavor and nutrients.',
      longDescription: 'Our free-range eggs come from chickens that are allowed to roam freely in open pastures. These happy hens produce eggs that are richer in flavor and nutrients compared to conventional eggs. Each egg is carefully collected and inspected for quality.',
      price: 3.49,
      oldPrice: null,
      category: 'Poultry Meat And Eggs',
      rating: 4.8,
      isOrganic: true,
      sku: 'ORG-EGG-001',
      stock: 30,
      weight: '6 eggs',
      tags: ['organic', 'free-range', 'protein'],
      reviews: [
        { id: 1, user: 'Emily R.', rating: 5, comment: 'These eggs have the most vibrant yolks I\'ve ever seen!', date: '2023-10-18' },
        { id: 2, user: 'Michael T.', rating: 5, comment: 'You can really taste the difference with these free-range eggs.', date: '2023-10-05' }
      ],
      nutritionalInfo: {
        calories: '70 kcal',
        protein: '6g',
        carbs: '0.6g',
        fiber: '0g',
        sugar: '0.6g'
      },
      relatedProducts: [3, 7, 9]
    },
    // More products would be here in a real application
  ];

  useEffect(() => {
    // In a real application, this would be an API call
    const foundProduct = mockProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const addToCart = () => {
    // In a real application, this would dispatch an action to add the product to cart
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // Show success message or redirect to cart
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="star filled" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="star" />);
    }

    return stars;
  };

  if (!product) {
    return (
      <div className="product-page-loading container">
        <h2>Loading product...</h2>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="container">
        <div className="breadcrumb">
          <span>Home</span> / <span>{product.category}</span> / <span>{product.name}</span>
        </div>

        <div className="product-details">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
              {product.isOrganic && <span className="organic-badge">Organic</span>}
              {product.oldPrice && <span className="discount-badge">Sale</span>}
            </div>
            {/* Thumbnail gallery would go here in a real application */}
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-meta">
              <div className="product-rating">
                {renderRatingStars(product.rating)}
                <span className="rating-count">({product.rating})</span>
              </div>
              <div className="product-sku">
                <span>SKU: {product.sku}</span>
              </div>
              <div className="product-stock">
                <span className={product.stock > 0 ? 'in-stock' : 'out-of-stock'}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <div className="product-price">
              {product.oldPrice ? (
                <>
                  <span className="current-price">${product.price.toFixed(2)}</span>
                  <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                  <span className="discount-percentage">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% Off
                  </span>
                </>
              ) : (
                <span className="current-price">${product.price.toFixed(2)}</span>
              )}
            </div>

            <div className="product-short-description">
              <p>{product.description}</p>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button className="quantity-btn" onClick={decrementQuantity}>-</button>
                <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  className="quantity-input"
                />
                <button className="quantity-btn" onClick={incrementQuantity}>+</button>
              </div>
              
              <button className="btn btn-primary add-to-cart" onClick={addToCart}>
                <FaShoppingCart /> Add to Cart
              </button>
              
              <button className="btn btn-outline wishlist-btn">
                <FaHeart /> Add to Wishlist
              </button>
            </div>

            <div className="product-meta-info">
              <div className="meta-item">
                <span className="meta-label">Category:</span>
                <span className="meta-value">{product.category}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Tags:</span>
                <span className="meta-value">{product.tags.join(', ')}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Weight:</span>
                <span className="meta-value">{product.weight}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Share:</span>
                <div className="social-share">
                  <button className="share-btn"><FaShareAlt /></button>
                  {/* Social sharing buttons would go here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button 
              className={`tab-btn ${activeTab === 'additional' ? 'active' : ''}`}
              onClick={() => setActiveTab('additional')}
            >
              Additional Information
            </button>
            <button 
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviews.length})
            </button>
          </div>
          
          <div className="tabs-content">
            {activeTab === 'description' && (
              <div className="tab-pane">
                <h3>Product Description</h3>
                <p>{product.longDescription}</p>
              </div>
            )}
            
            {activeTab === 'additional' && (
              <div className="tab-pane">
                <h3>Additional Information</h3>
                <table className="additional-info-table">
                  <tbody>
                    <tr>
                      <th>Weight</th>
                      <td>{product.weight}</td>
                    </tr>
                    <tr>
                      <th>Nutritional Information</th>
                      <td>
                        <ul className="nutritional-info">
                          <li><strong>Calories:</strong> {product.nutritionalInfo.calories}</li>
                          <li><strong>Protein:</strong> {product.nutritionalInfo.protein}</li>
                          <li><strong>Carbohydrates:</strong> {product.nutritionalInfo.carbs}</li>
                          <li><strong>Fiber:</strong> {product.nutritionalInfo.fiber}</li>
                          <li><strong>Sugar:</strong> {product.nutritionalInfo.sugar}</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>Organic</th>
                      <td>{product.isOrganic ? 'Yes' : 'No'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="tab-pane">
                <h3>Customer Reviews</h3>
                <div className="reviews-summary">
                  <div className="average-rating">
                    <div className="rating-number">{product.rating.toFixed(1)}</div>
                    <div className="rating-stars">{renderRatingStars(product.rating)}</div>
                    <div className="rating-count">{product.reviews.length} Reviews</div>
                  </div>
                </div>
                
                <div className="reviews-list">
                  {product.reviews.map(review => (
                    <div className="review-item" key={review.id}>
                      <div className="review-header">
                        <div className="reviewer-name">{review.user}</div>
                        <div className="review-date">{review.date}</div>
                      </div>
                      <div className="review-rating">
                        {renderRatingStars(review.rating)}
                      </div>
                      <div className="review-content">
                        <p>{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="write-review">
                  <h4>Write a Review</h4>
                  <form className="review-form">
                    <div className="form-group">
                      <label>Your Rating</label>
                      <div className="rating-selector">
                        {/* Rating selector would go here */}
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Your Review</label>
                      <textarea placeholder="Write your review here..."></textarea>
                    </div>
                    <div className="form-group">
                      <label>Name</label>
                      <input type="text" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" placeholder="Your email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit Review</button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products Section */}
        <div className="related-products">
          <h2>Related Products</h2>
          <div className="products-grid">
            {/* Related products would be mapped here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;