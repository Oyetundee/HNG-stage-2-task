import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Rout from "./rout";
import Nav from './nav';
import './App.css'
import ProductPage from './comp/productPage'
import Footer from "./comp/footer";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Rout />
    <ProductPage />
    <Footer />
    </BrowserRouter>
    </>
  )
}
export default App