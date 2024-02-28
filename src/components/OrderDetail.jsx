import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const { orderId } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) {
        setLoading(false);
        return;
      }
      
      try {
        const response = await axios.get(`https://eshop-deve.herokuapp.com/api/v2/orders/${orderId}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
          }
        });
        setOrder(response.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
        setOrder(null);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Order not found or there was an error loading the order details.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Order Detail</h2>
      <p><strong>Order Number:</strong> {order.number}</p>
      <p><strong>Status:</strong> {order.fulfillmentStatus?.status}</p>
      
      <h3 className="text-md font-bold mt-4 mb-2">Items Ordered:</h3>
      {order.items && order.items.length > 0 ? (
        <ul>
          {order.items.map((item, index) => (
            <li key={index}>
              <p><strong>SKU:</strong> {item.sku}</p>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Price:</strong> {item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items found in this order.</p>
      )}
    </div>
  );
};

export default OrderDetail;
