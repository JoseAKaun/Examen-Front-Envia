import React, { useState } from 'react';



{/*Non-Functional*/}

const AddProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({ sku: '', name: '', quantity: '', price: '' });
  const handlePayment = () => {
  alert('Payment successful!');
};

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({ sku: '', name: '', quantity: '', price: '' }); // Reset form
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sku">SKU</label>
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sku" type="text" name="sku" value={product.sku} onChange={handleChange} required />
  </div>
  {/* Repeat for other inputs */}
  <div className="flex justify-between mt-4">
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Product</button>
    <button onClick={handlePayment} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pay</button>
  </div>
</form>
  );
};

export default AddProductForm;
