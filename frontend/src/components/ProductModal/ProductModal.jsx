import React from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modal_overlay">
      <div className="modal_content">
        <button className="close_button" onClick={onClose}>
          &times;
        </button>
        <div className="modal_body">
          <img src={product.productPic} alt={product.name} className="modal_image" />
          <div className="modal_details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
