import  { useState, useEffect } from 'react';
import axios from 'axios';
import FilterSidebar from './FilterSidebar';
import ProductList from './ProductList';

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', priceRange: '', sort: '' });

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data));
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProducts = products
    .filter((product) => (filters.category ? product.category === filters.category : true))
    .filter((product) => {
      if (filters.priceRange === 'low') return product.price < 50;
      if (filters.priceRange === 'mid') return product.price >= 50 && product.price <= 100;
      if (filters.priceRange === 'high') return product.price > 100;
      return true;
    })
    .sort((a, b) => {
      if (filters.sort === 'price') return a.price - b.price;
      if (filters.sort === 'name') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="flex">
      <FilterSidebar onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Ecommerce;
