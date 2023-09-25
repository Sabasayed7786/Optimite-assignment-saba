import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import AddProductPopup from '../components/AddProductPopup';
import ApiProductList from '../ApiComponents/ApiProductList';
import "./Home.css";

function Home() {
    const { products, deleteProduct } = useProductContext();
    const [isAddProductPopupOpen, setIsAddProductPopupOpen] = useState(false);
    const [sortCriteria, setSortCriteria] = useState('none'); // Default to no sorting

    // Function to sort products by price range
    const sortProductsByRange = (range) => {
        const sortedProducts = [...products];
        if (range === 'lowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (range === 'highToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        
    };

    return (
        <div className="home-container">
            <div className="home-header">
                <h1 className="home-title">Shopping App</h1>
                <div>
                <button className="home-button" onClick={() => setIsAddProductPopupOpen(true)}>
                    Add Product
                </button>
                <select
                    className="sort-dropdown"
                    onChange={(e) => {
                        const selectedRange = e.target.value;
                        setSortCriteria(selectedRange);
                        sortProductsByRange(selectedRange);
                    }}
                >
                    <option value="none">Sort by Price Range</option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
                </div>
            </div>
            <ApiProductList />
            <div className="product-grid">
                {products.map((product, index) => (
                    <div key={index}>
                        <ProductCard productId={product.id} product={product} onDelete={deleteProduct} />
                    </div>
                ))}
            </div>
            <AddProductPopup
                isOpen={isAddProductPopupOpen}
                onRequestClose={() => setIsAddProductPopupOpen(false)}
            />
        </div>
    );
}

export default Home;


