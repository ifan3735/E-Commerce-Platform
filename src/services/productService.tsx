// src/services/productService.ts
import api from '../utils/api';
import axios from 'axios';

// Interface for the product
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// src/services/productService.ts

const API_URL = 'https://fakestoreapi.com';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProduct = async (productId: number): Promise<Product> => {
  const response = await axios.get(`${API_URL}/products/${productId}`);
  return response.data;
};
