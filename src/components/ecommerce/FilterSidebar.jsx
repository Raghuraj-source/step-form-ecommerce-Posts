/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import  { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    sort: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="p-4 bg-gray-200">
      <h3 className="font-bold mb-2">Filter by</h3>

      <div className="mb-4">
        <label>Category:</label>
        <select name="category" onChange={handleInputChange} className="block w-full p-2">
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="mb-4">
        <label>Price Range:</label>
        <select name="priceRange" onChange={handleInputChange} className="block w-full p-2">
          <option value="">All</option>
          <option value="low">Low (&lt; $50)</option>
          <option value="mid">Mid ($50 - $100)</option>
          <option value="high">High (&gt; $100)</option>
        </select>
      </div>

      <div className="mb-4">
        <label>Sort By:</label>
        <select name="sort" onChange={handleInputChange} className="block w-full p-2">
          <option value="">Default</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
