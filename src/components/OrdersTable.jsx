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
  <div className="container mx-auto p-4 text-white bg-bgbg">
    <h1 className="text-xl font-bold mb-4 text-white">Orders (Examen)</h1>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-white">
      <table className="w-full text-sm text-left text-white bg-tblbg">
        <thead className="text-xs uppercase text-wtx border-b">
          <tr>
            <th scope="col" className="border-r border-brd px-6 py-3">Sku</th>
            <th scope="col" className="border-r border-brd px-6 py-3">Name</th>
            <th scope="col" className="border-r border-brd px-6 py-3">Quantity</th>
            <th scope="col" className="border-r border-brd px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, orderIndex) =>
            order.items.map((item, itemIndex) => {
              const uniqueKey = `order-${orderIndex}-item-${itemIndex}`;
              const price = parseFloat(item.price);
              return (
                <tr key={uniqueKey} onClick={() => goToOrderDetail(order.id)} className="odd:bg-blue-100 even:bg-blue-200 hover:bg-yellow-200 cursor-pointer text-wtx">
                <th scope="row" className=" border-b border-r border-brd px-6 py-4 font-medium">{item.sku}</th>
                <td className="border-b border-r border-brd px-6 py-3">{item.name}</td>
                <td className="border-b border-r border-brd px-6 py-3">{item.quantity}</td>
                <td className="border-b border-r border-brd px-6 py-3">${!isNaN(price) ? price.toFixed(2) : 'Invalid price'}</td>
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
