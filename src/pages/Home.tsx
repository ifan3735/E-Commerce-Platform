import React from 'react';
import ProductList from '../components/Product/ProductList';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to MyShop</h1>
      <ProductList />
    </div>
  );
};

export default Home;
