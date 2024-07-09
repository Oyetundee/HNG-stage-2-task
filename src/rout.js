import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./home";
import ProductPage from "./comp/productPage";
// import Product from "./comp/product";

const Rout = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<ProductPage />}/>
        </Routes>
        </>
    )
}
export default Rout