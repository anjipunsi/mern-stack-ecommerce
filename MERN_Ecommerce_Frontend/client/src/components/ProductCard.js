// src/components/ProductCard.js

import React from 'react';
import './ProductCard.css'; // Create a CSS file for styling

const ProductCard = ({ product, onAddToCart }) => {
    const { name, price, imageUrl, description } = product;

    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">${price}</p>
                <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
