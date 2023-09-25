import React from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductCard from './ProductCard';

function ProductList() {
    const { products, deleteProduct, sortProducts, sortByPrice } = useProductContext();

    return (
        <div>
            <div className="flex justify-end m-4">
                <label>Sort by Price:</label>
                <select onChange={(e) => sortProducts(e.target.value)} value={sortByPrice}>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
            </div>
            <div className="flex flex-wrap">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onDelete={deleteProduct} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
