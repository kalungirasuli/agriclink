import React, { useState, useEffect } from 'react';
import { FaThLarge, FaList, FaFilter, FaTimes, FaSearch } from 'react-icons/fa';
import ProductCard from '../components/shop/ProductCard';
import ProductListItem from '../components/shop/ProductListItem';

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: 'Organic Apples',
    image: '/src/assets/images/products/apples.jpg',
    description: 'Fresh organic apples grown without pesticides. Perfect for healthy snacking and cooking.',
    price: 4.99,
    oldPrice: 6.99,
    category: 'Fruits And Vegetables',
    rating: 4.5,
    isOrganic: true,
  },
  {
    id: 2,
    name: 'Free Range Eggs',
    image: '/src/assets/images/products/eggs.jpg',
    description: 'Farm fresh free-range eggs from happy chickens. Rich in flavor and nutrients.',
    price: 3.49,
    oldPrice: null,
    category: 'Poultry Meat And Eggs',
    rating: 4.8,
    isOrganic: true,
  },
  {
    id: 3,
    name: 'Organic Milk',
    image: '/src/assets/images/products/milk.jpg',
    description: 'Creamy organic milk from grass-fed cows. No hormones or antibiotics.',
    price: 2.99,
    oldPrice: 3.49,
    category: 'Milk And Dairies',
    rating: 4.3,
    isOrganic: true,
  },
  {
    id: 4,
    name: 'Grass-Fed Beef',
    image: '/src/assets/images/products/beef.jpg',
    description: 'Premium grass-fed beef raised on sustainable pastures. Lean and flavorful.',
    price: 12.99,
    oldPrice: null,
    category: 'Types Of Livestock Meat',
    rating: 4.6,
    isOrganic: false,
  },
  {
    id: 5,
    name: 'Organic Honey',
    image: '/src/assets/images/products/honey.jpg',
    description: 'Pure, raw organic honey harvested from our own beehives. Rich in antioxidants.',
    price: 8.99,
    oldPrice: 10.99,
    category: 'Packaged Foods',
    rating: 4.9,
    isOrganic: true,
  },
  {
    id: 6,
    name: 'Herbal Tea',
    image: '/src/assets/images/products/tea.jpg',
    description: 'Organic herbal tea blend with calming properties. Perfect for relaxation.',
    price: 5.49,
    oldPrice: null,
    category: 'Health And Wellness',
    rating: 4.2,
    isOrganic: true,
  },
];

// Categories for filtering
const categories = [
  'All Categories',
  'Fruits And Vegetables',
  'Packaged Foods',
  'Milk And Dairies',
  'Types Of Livestock Meat',
  'Health And Wellness',
  'Poultry Meat And Eggs'
];

const Shop = () => {
  const [products, setProducts] = useState(mockProducts);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [organicOnly, setOrganicOnly] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  const filterProducts = () => {
    let filtered = [...mockProducts];
    
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All Categories') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Organic filter
    if (organicOnly) {
      filtered = filtered.filter(product => product.isOrganic);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setProducts(filtered);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, priceRange, organicOnly, sortBy, searchQuery]);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Welcome to AgriLink Shop</h1>
        <p>Fresh from our farms to your table</p>
      </div>

      <div className="shop-controls">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="view-controls">
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FaThLarge /> Grid
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FaList /> List
          </button>
          <button
            className="filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? <FaTimes /> : <FaFilter />}
            Filters
          </button>
        </div>
      </div>

      <div className="shop-layout">
        {showFilters && (
          <div className="shop-filters">
            <div className="filter-section">
              <h3>Categories</h3>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-inputs">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([
                    Number(e.target.value),
                    priceRange[1]
                  ])}
                  min="0"
                  max={priceRange[1]}
                />
                <span>to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([
                    priceRange[0],
                    Number(e.target.value)
                  ])}
                  min={priceRange[0]}
                />
              </div>
            </div>

            <div className="filter-section">
              <h3>Sort By</h3>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="filter-section">
              <label className="organic-filter">
                <input
                  type="checkbox"
                  checked={organicOnly}
                  onChange={(e) => setOrganicOnly(e.target.checked)}
                />
                Organic Products Only
              </label>
            </div>
          </div>
        )}

        <div className={`products-grid ${viewMode}`}>
          {products.length > 0 ? (
            products.map(product => (
              viewMode === 'grid' ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <ProductListItem key={product.id} product={product} />
              )
            ))
          ) : (
            <div className="no-products">
              <p>No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;