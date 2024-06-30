import React, { useState } from 'react';
import ProductList from '../components/Product/ProductList';

const ProductManagement: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <ProductList setSelectedProduct={setSelectedProduct} />

      {selectedProduct && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="text-xl font-bold mb-4">Edit Product</h3>
          <form>
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded"
              value={selectedProduct.name}
            />
            <label className="block mb-2 mt-4" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full p-2 border rounded"
              value={selectedProduct.price}
            />
            <button className="mt-4 bg-indigo-600 text-white p-2 rounded">
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
