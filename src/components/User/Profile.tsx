import React, { useState, useEffect } from 'react';
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
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const currentUser = null; // Replace with actual current user from authentication context

  useEffect(() => {
    // Replace with actual fetch orders logic
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      await currentUser?.updateProfile({ displayName });
      // Optionally, update other user fields in your database if needed
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
        <Input
          label="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <Button onClick={handleUpdateProfile}>Update Profile</Button>
      </form>
      <h3 className="text-xl font-semibold mt-8 mb-4">Order History</h3>
      {orders.length > 0 ? (
        <ul className="space-y-4">
          {orders.map((order) => (
            <li key={order.id} className="p-4 border rounded">
              <h4 className="text-lg font-semibold">Order ID: {order.id}</h4>
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
