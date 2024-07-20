// src/components/Product/Product.jsx
import React, { useState } from "react";
import "./Product.css";
import ProductModal from "../../ProductModal/ProductModal";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import { MdMoreHoriz } from "react-icons/md";
import { products } from "../../../mocks/products";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null)
  const handleSearchClick = (id) => {
    setSelectedId(id)
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container_products product">
      {products?.map((product) => (
        <div className="product_item">
        <div className="product_item_image">
          <img src={product.image} alt="product" />
          <div className="product_item_image_hover">
            <button>
              <Link to="/" className="product_icon">
                <MdMoreHoriz />
              </Link>
            </button>
            <button type="button" onClick={() =>handleSearchClick(product.id) }>
              <div className="product_icon">
                <LiaSearchSolid />
              </div>
            </button>
            <button>
              <Link to="/" className="product_icon">
                <IoMdHeartEmpty />
              </Link>
            </button>
          </div>
        </div>
        <div className="product_item_body">
          <p>{product.name}</p>
          <span>${product.price}</span>
        </div>
      </div>

      ))}
      {/* Modal burada render edilir */}
      {isModalOpen && (
        <ProductModal product={products.find((e) => e.id === selectedId)} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Product;
