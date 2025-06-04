import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF, FaApple, 
         FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Login form submitted:', formData);
        // Redirect to home or dashboard page after successful login
      } catch (error) {
        setErrors({ submit: 'Failed to sign in. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <div className="login-page">
      <div className="auth-wrapper">
        <div className="auth-side">
          <div className="auth-side-content">
            <h2>Welcome to DonalFarm</h2>
            <p>Your trusted source for organic and fresh produce.</p>
            <div className="auth-features">
              <div className="feature-item">
                <span className="feature-icon">🌱</span>
                <p>100% Organic Products</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚚</span>
                <p>Free Delivery</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💎</span>
                <p>Premium Quality</p>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-container">
          <div className="auth-content">
            <div className="auth-header">
              <h1>Welcome Back!</h1>
              <p>Sign in to continue your organic journey</p>
            </div>
            
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-with-icon">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`${errors.email ? 'error' : ''} ${focusedField === 'email' ? 'focused' : ''}`}
                  />
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-with-icon">
                  <FaLock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('password')}
                    onBlur={handleBlur}
                    className={`${errors.password ? 'error' : ''} ${focusedField === 'password' ? 'focused' : ''}`}
                  />
                  <button 
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
              
              <div className="form-options">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
              </div>

              {errors.submit && (
                <div className="submit-error">
                  {errors.submit}
                </div>
              )}
              
              <button 
                type="submit" 
                className={`btn btn-primary btn-block ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
              
              <div className="auth-divider">
                <span>or continue with</span>
              </div>
              
              <div className="social-auth">
                <button type="button" className="social-btn google" aria-label="Sign in with Google">
                  <FaGoogle />
                </button>
                <button type="button" className="social-btn facebook" aria-label="Sign in with Facebook">
                  <FaFacebookF />
                </button>
                <button type="button" className="social-btn apple" aria-label="Sign in with Apple">
                  <FaApple />
                </button>
              </div>
            </form>
            
            <div className="auth-footer">
              <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;