import React, { useState } from "react";
import "./Products.css";
import Categories from "../../components/Products/Categories/Categories";
import Product from "../../components/Products/Product/Product";
import Filter from "../../components/Products/Filter/Filter";

const Products = () => {
  const [categoryId, setCategoryId] = useState(null);

  const handleCategorySelect = (id) => {
    setCategoryId(id);
  };

  return (
    <div className="productsBack">
      <div className="container products">
        <Categories onCategorySelect={handleCategorySelect} />
        <Filter />
        <Product categoryId={categoryId} productsPerPage={12} showPagination={true} />
      </div>
    </div>
  );
};

export default Products;