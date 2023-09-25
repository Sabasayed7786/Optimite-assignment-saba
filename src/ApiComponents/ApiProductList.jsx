import React, { useState, useEffect } from 'react';
import ApiProductCard from './ApiProductCard';

const ApiProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>

            {products.map((product) => (
                <ApiProductCard key={product.id} product={product} />
            ))}

        </div>
    );
}

export default ApiProductList;
