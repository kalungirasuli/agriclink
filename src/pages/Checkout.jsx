import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaCreditCard, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa';

const Checkout = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveInfo: false,
  });

  // Mock cart items from Cart page
  const cartItems = [
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
  ];

  // Calculate order summary
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const discount = 0; // No discount by default
  const total = subtotal + shipping - discount;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would process the payment and create an order
    console.log('Order submitted:', formData);
    // Redirect to order confirmation page
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="page-header">
          <h1>Checkout</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <Link to="/cart">Cart</Link> / <span>Checkout</span>
          </div>
        </div>

        <div className="checkout-content">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="checkout-grid">
              <div className="billing-details">
                <h2>Billing Details</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">Street Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="House number and street name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Town / City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zipCode">Zip Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="country">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="saveInfo"
                    name="saveInfo"
                    checked={formData.saveInfo}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="saveInfo">Save this information for next time</label>
                </div>
              </div>

              <div className="order-summary">
                <h2>Your Order</h2>
                
                <div className="order-items">
                  <div className="order-header">
                    <span>Product</span>
                    <span>Subtotal</span>
                  </div>
                  
                  {cartItems.map(item => (
                    <div className="order-item" key={item.id}>
                      <div className="item-name">
                        {item.name} <span className="item-quantity">× {item.quantity}</span>
                      </div>
                      <div className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                  
                  <div className="order-subtotal">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="order-shipping">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="order-discount">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="order-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="payment-methods">
                  <h3>Payment Method</h3>
                  
                  <div className="payment-options">
                    <div className="payment-option">
                      <input
                        type="radio"
                        id="credit-card"
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === 'credit-card'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="credit-card">
                        <FaCreditCard /> Credit / Debit Card
                      </label>
                    </div>
                    
                    <div className="payment-option">
                      <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="paypal">
                        <FaPaypal /> PayPal
                      </label>
                    </div>
                    
                    <div className="payment-option">
                      <input
                        type="radio"
                        id="apple-pay"
                        name="paymentMethod"
                        value="apple-pay"
                        checked={formData.paymentMethod === 'apple-pay'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="apple-pay">
                        <FaApplePay /> Apple Pay
                      </label>
                    </div>
                    
                    <div className="payment-option">
                      <input
                        type="radio"
                        id="google-pay"
                        name="paymentMethod"
                        value="google-pay"
                        checked={formData.paymentMethod === 'google-pay'}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="google-pay">
                        <FaGooglePay /> Google Pay
                      </label>
                    </div>
                  </div>
                  
                  {formData.paymentMethod === 'credit-card' && (
                    <div className="credit-card-form">
                      <div className="form-group">
                        <label htmlFor="cardNumber">Card Number *</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          required={formData.paymentMethod === 'credit-card'}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="cardName">Name on Card *</label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required={formData.paymentMethod === 'credit-card'}
                        />
                      </div>
                      
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="expiryDate">Expiry Date *</label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            required={formData.paymentMethod === 'credit-card'}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="cvv">CVV *</label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            required={formData.paymentMethod === 'credit-card'}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="secure-checkout-info">
                  <FaLock /> Your payment information is secure
                </div>
                
                <button type="submit" className="btn btn-primary place-order-btn">
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;