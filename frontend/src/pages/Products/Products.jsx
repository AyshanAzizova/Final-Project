import React, { useState } from "react";
import "./Products.css";
import Categories from "../../components/Products/Categories/Categories";
import Product from "../../components/Products/Product/Product";
import Filter from "../../components/Products/Filter/Filter";
import Pagination from "../../components/Pagination/Pagination";
import { products } from "../../mocks/products"; // Məhsul verilənləri

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="productsBack">
      <div className="container products">
        <Categories />
        <Filter />
        <Product products={currentProducts} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
