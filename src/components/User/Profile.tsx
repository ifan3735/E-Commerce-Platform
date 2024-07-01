import React, { useState, useEffect } from 'react';
import { useAuth } from '../../services/authService';
import { getOrders } from '../../services/orderService';
import Button from '../Common/Button';
import Input from '../Common/Input';

interface Order {
  id: number;
  total: number;
  address: string;
  paymentInfo: string;
  status: string;
  createdAt: string;
}

const Profile: React.FC = () => {
  const { currentUser } = useAuth();
  const [email, setEmail] = useState(currentUser?.email || '');
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser.email || '');
      setDisplayName(currentUser.displayName || '');
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        const userOrders = response.filter((order: Order) => order.userId === currentUser?.uid);
        setOrders(userOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (currentUser) {
      fetchOrders();
    }
  }, [currentUser]);

  const handleUpdateProfile = async () => {
    try {
      await currentUser?.updateProfile({ displayName });
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
        <Input label="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        <Button onClick={handleUpdateProfile}>Update Profile</Button>
      </form>
      <h3 className="text-2xl font-semibold mt-8 mb-6">Order History</h3>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="p-4 border rounded shadow-sm">
              <h4 className="text-xl font-semibold">Order ID: {order.id}</h4>
              <p>Total: ${order.total.toFixed(2)}</p>
              <p>Status: {order.status}</p>
              <p>Address: {order.address}</p>
              <p>Placed on: {new Date(order.createdAt).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Profile;
