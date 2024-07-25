import React, { useState } from "react";
import "./ProductSlider.css";
import image1 from "../../../assets/images/instagram1.webp";
import image2 from "../../../assets/images/instagram2.webp";
import image3 from "../../../assets/images/instagram3.webp";
import image4 from "../../../assets/images/instagram4.webp";

const images = [image1, image2, image3, image4];

const ProductSlider = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-slider">
      <div className="thumbnail-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${image === selectedImage ? "active" : ""}`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="main-image">
        <img src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
};

export default ProductSlider;