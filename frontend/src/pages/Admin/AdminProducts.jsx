import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from 'axios';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async(id)=>{
    axios.delete(`/api/products/${id}`)
    setProducts(products.filter((x)=>x._id!==id))
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products'); // Adjust the URL based on your API endpoint
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="admin_content">
      <h1>Products</h1>
      <table className="products_table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Categories</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td><img src={`/${product.productPic}`} alt={product.title} width="50" /></td>
                <td>{product.title}</td>
                <td>{product.sku}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stock.reduce((acc, item) => acc + item.quantity, 0) > 0 ? 'In Stock' : 'Out of Stock'}</td>
                <td>{product.category.name}</td>
                <td><button onClick={()=>{handleDelete(product._id)}}>sill</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
