import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/cartSlice';
import Button from '../Common/Button';

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }));
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded mr-4" />
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-indigo-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center">
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center border rounded mr-4"
          min="1"
        />
        <Button onClick={handleRemove} className="text-red-600 bg-transparent hover:bg-red-100">Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
