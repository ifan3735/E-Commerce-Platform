import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import CartItem from './CartItem';
import Button from '../Common/Button';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="text-right mt-4">
            <Button onClick={handleCheckout} className="w-auto">Proceed to Checkout</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
