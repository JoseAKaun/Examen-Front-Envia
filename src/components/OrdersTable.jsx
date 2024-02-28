import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://eshop-deve.herokuapp.com/api/v2/orders', {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
          }
        });
        if (response.data.orders && response.data.orders.length > 0) {
          setOrders(response.data.orders.slice(1));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const goToOrderDetail = (orderId) => {
    navigate(`/order/${orderId}`);
  };


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Orders (Examen)</h1>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Sku</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Quantity</th>
              <th scope="col" className="px-6 py-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, orderIndex) =>
            order.items.map((item, itemIndex) => {
              const uniqueKey = `order-${orderIndex}-item-${itemIndex}`;
              const price = parseFloat(item.price);
              return (
                <tr key={uniqueKey} onClick={() => goToOrderDetail(order.id)} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-200 cursor-pointer">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.sku}</th>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">${!isNaN(price) ? price.toFixed(2) : 'Invalid price'}</td>
                </tr>
            );
          })
        )}
      </tbody>
    </table>
  </div>
</div>
  );
};

export default OrdersTable;
