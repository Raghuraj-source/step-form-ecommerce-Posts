/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
          <h4 className="font-bold">{product.title}</h4>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-lg font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
