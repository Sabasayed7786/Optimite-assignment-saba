import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import "./Info.css"

function Info() {
    const { id } = useParams();
    const { products } = useProductContext();

    // Find the product with the matching ID
    const product = products.find((p) => p.id === (id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="info-container">
            
            <div>
                <h2>{product.title}</h2>
                <img
                    src={product.image} 
                    alt={product.title} 
                    className="w-32 h-32 object-cover"
                />
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
               
            </div>
        </div>
    );
}

export default Info;
