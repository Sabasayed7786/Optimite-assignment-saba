import React from 'react';
import { Link } from 'react-router-dom';
import './ApiProductCard.css'; // Import the CSS file

const ApiProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <Link to={`/products/${product.id}`}>
        <div className="product-card-image-container">
          <img
            className="product-card-image"
            src={product.image}
            alt={product.title}
          />
        </div>
      </Link>
      <div className="product-card-content">
        <h5 className="product-card-title">{product.title}</h5>
        <p className="product-card-price">Price: ${product.price}</p>
        {/* <p className="product-card-description">{product.description}</p> */}
        <p className="product-card-category">Category: {product.category}</p>
        <p className="product-card-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
      </div>
    </div>
  );
};

export default ApiProductCard;





