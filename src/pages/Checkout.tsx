import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import Button from '../components/Common/Button';
import Input from '../components/Common/Input';
import  clearCart  from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [address, setAddress] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrder = async () => {
    try {
      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      const order = {
        userId: 'user-id', // Replace with actual user ID from authentication context
        items: cartItems,
        total,
        address,
        paymentInfo,
        status: 'Pending',
      };
      // Replace with actual order creation logic
      console.log('Placing order:', order);
      dispatch(clearCart());
      navigate('/');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Shipping Address</h3>
        <Input label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Payment Information</h3>
        <Input label="Payment Info" value={paymentInfo} onChange={(e) => setPaymentInfo(e.target.value)} />
      </div>
      <Button onClick={handleOrder}>Place Order</Button>
    </div>
  );
};

export default Checkout;
