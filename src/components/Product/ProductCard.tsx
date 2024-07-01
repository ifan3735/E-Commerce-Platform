// src/components/Product/ProductCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-indigo-600">${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className="block mt-2 text-center bg-indigo-600 text-white py-2 rounded">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
