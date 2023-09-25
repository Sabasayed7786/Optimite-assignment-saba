import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
// import { useApiProductContext } from '../context/ApiContext';
import { useProductContext } from '../context/ProductContext';
import "./ApiDetails.css"

const ApiDetails = () => {
    const { apiData } = useProductContext();
    const { productId } = useParams();
    console.log("params", productId);
    console.log(apiData);
    
    let product = apiData.find((p) => p.id === parseInt(productId));
    
    console.log(product);
    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <div>
            <h1>{product.title}</h1>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            {/* <p>Rating: {apiData.rating.rate} ({apiData.rating.count} reviews)</p> */}
            {/* Add any additional details you want to display */}
            </div>
        </div>
    );
};

export default ApiDetails;
