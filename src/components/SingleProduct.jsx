import React, { useState } from "react";
import "../stylesheet/SingleProduct.scss"; // Import your CSS file
const product = {
  name: "Sample Product",
  price: 19.99,
  description:
    "Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.",
  images: [
    "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/btt2.webp",
    "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/btt3.webp",
    "https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/shipping/btt4.webp",
  ],
};
const SingleProduct = () => {
  // Initialize state to manage the selected image
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  // Handle image selection
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div id="single-product">
      <div className="product-images">
        <div className="big-image">
          <img src={selectedImage} alt={product.name} />
        </div>
      </div>
      <div className="product-details">
        <div id="pd-t">
          <h1>{product.name}</h1>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>

          <div className="row">
            <div className="quantity-counter">
              <button className="btn qt-btn" onClick={handleDecrement}>
                -
              </button>
              <span className="qunt">{quantity}</span>
              <button className="btn qt-btn" onClick={handleIncrement}>
                +
              </button>
            </div>
            <button className="btn btn-o">Buy Now</button>
          </div>
        </div>
        <div className="small-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.name}
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
