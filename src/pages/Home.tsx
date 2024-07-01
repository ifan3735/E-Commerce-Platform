import React from 'react';
import ProductList from '../components/Product/ProductList';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to MyShop</h1>
      <ProductList />
    </div>
  );
};

export default Home;
