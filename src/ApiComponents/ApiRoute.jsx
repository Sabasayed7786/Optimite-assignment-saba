import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ApiDetails from './ApiDetails';
import ApiProductList from './ApiProductList';

const ApiRoutes = () => {
    return (
        <Routes>
            <Route path="/products/:productId" element={<ApiDetails />} />
            <Route path="/products" element={<ApiProductList />} />
        </Routes>
    );
};

export default ApiRoutes;
