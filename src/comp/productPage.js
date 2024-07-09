// src/comp/ProductPage.js
import React from 'react';
import Product from './product';
import productsData from './productsData';

const ProductPage = () => {
    return (
        <div>
            {productsData.map(category => (
                <div key={category.category}>
                    <h2>{category.category}</h2>
                    <div className="products-list">
                        {category.items.map(product => (
                            <Product
                                key={product.id}
                                name={product.name}
                                quantity={product.quantity}
                                price={product.price}
                                image={product.image}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
