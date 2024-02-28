import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrdersTable from './components/OrdersTable';
import OrderDetail from './components/OrderDetail';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="bg-navblue shadow dark:bg-gray-800">
        <div className="container flex items-center justify-between p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          {/* Left section */}
          <div className="flex-initial">
            <a href="/" className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>
          </div>

          {/* Center section */}
          <div className="flex-1 text-center">
            <a href="/orders" className="text-gray-800 dark:text-gray-200 border-b-2 border-transparent hover:border-blue-500 mx-1.5 sm:mx-6">Orders</a>
          </div>

          {/* Right section (empty) */}
          <div className="flex-initial">
          </div>
        </div>
      </nav>

      {/* Routes */}
      <div className='bg-bgbg'>
        <Routes>
          <Route path="/" element={<OrdersTable />} />
          <Route path="/order/:orderId" element={<OrderDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
