// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Info from "./pages/Info";
import ApiDetails from "./ApiComponents/ApiDetails";

function App() {
  return (
    <Router>
      <ProductProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="/products/:productId" element={<ApiDetails />} />
          {/* <Route path="/api/*" element={<ApiRoutes />} /> */}
        </Routes>
      </ProductProvider>
    </Router>
  );
}

export default App;
