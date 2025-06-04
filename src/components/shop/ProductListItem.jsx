import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaEye, FaStar } from 'react-icons/fa';

const ProductListItem = ({ product }) => {
  const { id, name, image, description, price, oldPrice, category, rating, isOrganic } = product;

  return (
    <div className="product-list-item">
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} />
        </Link>
        {isOrganic && <span className="organic-badge">Organic</span>}
        {oldPrice && <span className="discount-badge">Sale</span>}
      </div>
      
      <div className="product-details">
        <div className="product-info">
          <span className="product-category">{category}</span>
          <h3 className="product-name">
            <Link to={`/product/${id}`}>{name}</Link>
          </h3>
          
          <div className="product-rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar 
                  key={i}
                  className={i < Math.floor(rating) ? 'star filled' : 'star'}
                />
              ))}
            </div>
            <span className="rating-value">({rating})</span>
          </div>
          
          <div className="product-description">
            <p>{description}</p>
          </div>
          
          <div className="product-price">
            {oldPrice ? (
              <>
                <span className="current-price">${price.toFixed(2)}</span>
                <span className="old-price">${oldPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="current-price">${price.toFixed(2)}</span>
            )}
          </div>
        </div>
        
        <div className="product-actions">
          <button className="btn btn-primary" title="Add to Cart">
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="btn btn-secondary" title="Add to Wishlist">
            <FaHeart /> Wishlist
          </button>
          <Link to={`/product/${id}`} className="btn btn-accent" title="View Details">
            <FaEye /> View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;