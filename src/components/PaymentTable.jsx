import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://eshop-deve.herokuapp.com/api/v2/orders', {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
          }
        });
        console.log(response.data);

        setOrders(response.data.orders); 
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Payment Table</h1>
      <table>
        <thead>
          <tr>
            <th>Sku</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {orders.map((order, orderIndex) =>
  order.items.map((item, itemIndex) => {
    const uniqueKey = `order-${orderIndex}-item-${itemIndex}`;

    console.log('Item SKU:', item.sku);

    const price = parseFloat(item.price);
    return (
      <tr key={uniqueKey}> {/* combination of order and item index as key */}
        <td>{item.sku}</td>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>${!isNaN(price) ? price.toFixed(2) : 'Invalid price'}</td>
      </tr>
    );
  })
)}

</tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
