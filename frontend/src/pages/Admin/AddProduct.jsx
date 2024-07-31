import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios'

const AddProduct = ({onProductAdded}) => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    slug: '',
    sku: '',
    description: '',
    quantity: '',
    size: '',
    color: '',
    productPic: {}
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFormData({ ...formData, productPic: e.target.files[0]});
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();

    for (const key in formData) {
        productData.append(key, formData[key]);
    }

    try {
        const response = await axios.post('/api/products', productData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        // const response = await fetch("/api/products",{
        //   headers:{
        //     'Content-Type': 'multipart/form-data'
        //   },
        //   method:"POST",
        //   body:productData
        // })
        onProductAdded(response.data); // Yeni ürün eklendiğinde çağrılacak
        alert('Product added successfully');
    } catch (error) {
        console.error('Error adding product:', error);
        alert('Failed to add product');
    }
};
  return (
    <div className="admin_content">
      <h2>Add Product</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="form_group">
          <label>Title</label>
          <input onChange={(e)=>{handleInputChange(e)}} type="text" name="title" />
        </div>
        <div className="form_group">
          <label>Price</label>
          <input onChange={(e)=>{handleInputChange(e)}} type="text" name="price" />
        </div>
        <div className="form_group">
          <label>Category</label>
          <input onChange={(e)=>{handleInputChange(e)}} type="text" name="category" />
        </div>
        <div className="form_group">
          <label>Slug</label>
          <input onChange={(e)=>{handleInputChange(e)}} type="text" name="slug" />
        </div>
        <div className="form_group">
          <label>SKU</label>
          <input onChange={(e)=>{handleInputChange(e)}} type="text" name="sku" />
        </div>
        <div className="form_group">
          <label>Description</label>
          <textarea onChange={(e)=>{handleInputChange(e)}} name="description"></textarea>
        </div>
        <div className="form_group">
          <label>Stock Status</label>
          <input onChange={(e)=>{handleInputChange(e)}} type="text" name="stock_status" />
        </div>
        <div className="form_group">
          <label>Available Quantity</label>
          <input onChange={(e)=>{handleInputChange(e)}} type="text" name="quantity" />
        </div>
        <div className="form_group">
          <label>Images</label>
          <input onChange={(e)=>{handleFileChange(e)}} type="file" name="productPic" multiple />
        </div>
        <div className="form_group">
          <label>Colors</label>
          <input onChange={(e)=>{handleInputChange(e)}} type="text" name="color" />
        </div>
        <div className="form_group">
          <label>Sizes</label>
          <input onChange={(e)=>{handleInputChange(e)}} type="text" name="size" />
        </div>
        <button type="submit">Save Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
