import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Cart = () => {
  // Mock cart data for demonstration
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Organic Apples',
      image: '/src/assets/images/products/apples.jpg',
      price: 4.99,
      quantity: 2,
      category: 'Fruits And Vegetables',
    },
    {
      id: 3,
      name: 'Organic Milk',
      image: '/src/assets/images/products/milk.jpg',
      price: 2.99,
      quantity: 1,
      category: 'Milk And Dairies',
    },
    {
      id: 5,
      name: 'Organic Honey',
      image: '/src/assets/images/products/honey.jpg',
      price: 8.99,
      quantity: 1,
      category: 'Packaged Foods',
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping - discount;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    
    // Mock coupon validation
    if (couponCode.toUpperCase() === 'ORGANIC20') {
      setCouponApplied(true);
      setDiscount(subtotal * 0.2); // 20% discount
    } else {
      setCouponApplied(false);
      setDiscount(0);
      alert('Invalid coupon code');
    }
  };

  return (
    <div className="cart-page">
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span>Cart</span>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any products to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-header">
                <div className="cart-header-item product-col">Product</div>
                <div className="cart-header-item price-col">Price</div>
                <div className="cart-header-item quantity-col">Quantity</div>
                <div className="cart-header-item subtotal-col">Subtotal</div>
                <div className="cart-header-item remove-col"></div>
              </div>

              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="product-col">
                    <div className="product-image">
                      <Link to={`/product/${item.id}`}>
                        <img src={item.image} alt={item.name} />
                      </Link>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <span className="product-category">{item.category}</span>
                    </div>
                  </div>

                  <div className="price-col">
                    <span className="item-price">${item.price.toFixed(2)}</span>
                  </div>

                  <div className="quantity-col">
                    <div className="quantity-selector">
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        min="1" 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} 
                        className="quantity-input"
                      />
                      <button 
                        className="quantity-btn" 
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="subtotal-col">
                    <span className="item-subtotal">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="remove-col">
                    <button 
                      className="remove-btn" 
                      onClick={() => handleRemoveItem(item.id)}
                      title="Remove Item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}

              <div className="cart-actions">
                <Link to="/shop" className="btn btn-outline">
                  <FaArrowLeft /> Continue Shopping
                </Link>
                <button className="btn btn-outline update-cart">
                  Update Cart
                </button>
              </div>
            </div>

            <div className="cart-summary">
              <h2>Cart Summary</h2>
              
              <div className="coupon-section">
                <h3>Coupon Code</h3>
                <form onSubmit={handleCouponSubmit}>
                  <input 
                    type="text" 
                    placeholder="Enter coupon code" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary">Apply Coupon</button>
                </form>
                {couponApplied && (
                  <div className="coupon-applied">
                    Coupon applied: 20% discount
                  </div>
                )}
              </div>
              
              <div className="cart-totals">
                <div className="totals-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="totals-row discount">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="totals-row">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="totals-row total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Link to="/checkout" className="btn btn-primary checkout-btn">
                Proceed to Checkout <FaArrowRight />
              </Link>
              
              <div className="secure-checkout">
                <p>🔒 Secure Checkout</p>
                <div className="payment-methods">
                  <img src="/src/assets/images/payment-methods.png" alt="Payment Methods" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;