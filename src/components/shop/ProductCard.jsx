import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaEye, FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const { id, name, image, price, oldPrice, category, rating, isOrganic } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} />
        </Link>
        {isOrganic && <span className="organic-badge">Organic</span>}
        {oldPrice && <span className="discount-badge">Sale</span>}
        <div className="product-actions">
          <button className="action-btn" title="Add to Cart">
            <FaShoppingCart />
          </button>
          <button className="action-btn" title="Add to Wishlist">
            <FaHeart />
          </button>
          <Link to={`/product/${id}`} className="action-btn" title="Quick View">
            <FaEye />
          </Link>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name">
          <Link to={`/product/${id}`}>{name}</Link>
        </h3>
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
      </div>
    </div>
  );
};

export default ProductCard;