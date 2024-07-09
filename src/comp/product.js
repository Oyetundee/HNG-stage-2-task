// Product.js
import React from 'react';
// import './Product.css'; // Import the CSS file for styling

const Product = ({ name, quantity, price, image }) => {
    return (
        
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-details">
                <h2>{name} {quantity}</h2>
                <p>{price}</p>
                <button className="add-to-cart">ADD TO CART</button>
            </div>
        </div>
    );
};

export default Product;
