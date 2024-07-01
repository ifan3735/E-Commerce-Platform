// src/services/orderService.ts
import api from '../utils/api';

// Interface for the order
export interface Order {
  id: number;
  userId: string;
  items: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  total: number;
  address: string;
  paymentInfo: string;
  status: string;
  createdAt: string;
}

export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get('/orders');
  return response.data;
};

export const getOrder = async (orderId: number): Promise<Order> => {
  const response = await api.get(`/orders/${orderId}`);
  return response.data;
};

export const createOrder = async (order: Omit<Order, 'id' | 'createdAt'>): Promise<Order> => {
  const response = await api.post('/orders', order);
  return response.data;
};
