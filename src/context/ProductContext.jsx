
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export function useProductContext() {
    return useContext(ProductContext);
}

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [sortByPrice, setSortByPrice] = useState('lowToHigh'); // Default sorting order
    const [apiData, setApiData] = useState([]);      //sets the api data

    useEffect(() => {
        // Fetch data from the API
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setApiData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);




    // Function to add a new product
    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    // Function to delete a product by ID
    const deleteProduct = (productId) => {
        const updatedProducts = products.filter((product) => (
            product.id !== productId
        ));
        console.log(updatedProducts);
        setProducts(updatedProducts);

    };

    // Function to sort products by price
    const sortProducts = (order) => {
        if (order === 'lowToHigh') {
            const sortedProducts = [...products].sort((a, b) => a.price - b.price);
            setProducts(sortedProducts);
        } else if (order === 'highToLow') {
            const sortedProducts = [...products].sort((a, b) => b.price - a.price);
            setProducts(sortedProducts);
        }
        setSortByPrice(order);
    };



    return (
        <ProductContext.Provider
            value={{ products, addProduct, deleteProduct, sortProducts, sortByPrice, apiData }}
        >
            {children}
        </ProductContext.Provider>

    );
}
