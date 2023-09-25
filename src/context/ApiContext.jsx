import React, { useState, useEffect, createContext, useContext } from 'react';
import ApiProductCard from '../components/ApiProductCard';


// Create a context to hold the products data
const ApiContext = createContext();

export function useApiProductContext() {
    return useContext(ApiContext);
}

const ApiProduct = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setApiData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="product-list">
            
            <ApiContext.Provider value={apiData}>
                {apiData.map((product) => (

                    <ApiProductCard key={product.id} product={product} />
                ))}
            </ApiContext.Provider>
        </div>
    );
}

export default ApiProduct;

