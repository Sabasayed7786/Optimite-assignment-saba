import React from 'react';
import { Link } from 'react-router-dom';
import "./ProductCard.css"

function ProductCard({ productId, product, onDelete }) {
    const handleDelete = () => {
        console.log(productId);
        onDelete(productId); // Pass the productId to onDelete
    };

    return (
        <div className="product-card-container">
             
            <img
                src={product.image} 
                alt={product.title}
                className="product-card-image"
            />
            <h2 className="product-card-title">{product.title}</h2>
            <p className="product-card-price">Price: ${product.price}</p>
        <button className="product-card-button" onClick={handleDelete}>
          Delete
        </button>
            <Link className="product-card-link" to={`/info/${productId}`}>Details</Link>
        </div>
    );
}

export default ProductCard;
