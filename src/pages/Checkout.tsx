import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import Button from '../components/Common/Button';
import Input from '../components/Common/Input';
import { clearCart } from '../store/cartSlice';
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
      await createOrder(order);
      dispatch(clearCart());
      navigate('/orders'); // Navigate to order confirmation page or orders page
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Shipping Address</h3>
        <Input label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Payment Information</h3>
        <Input label="Payment Info" value={paymentInfo} onChange={(e) => setPaymentInfo(e.target.value)} />
      </div>
      <Button onClick={handleOrder}>Place Order</Button>
    </div>
  );
};

export default Checkout;
