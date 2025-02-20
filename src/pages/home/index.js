import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const products = [
  { id: 1, name: "Minimal Desk Lamp", price: 10, image: "./img1.jpeg" },
  { id: 2, name: "Ceramic Coffee Mug", price: 15, image: "./img2.jpeg" },
  { id: 3, name: "Leather Notebook", price: 20, image: "./img3.jpg" },
  { id: 4, name: "Bamboo Plant Stand", price: 25, image: "./img4.jpeg" },
  { id: 5, name: " Abstract Wall Art ", price: 30, image: "./img5.jpeg" },
  { id: 6, name: " Geometric Bookends"
    
    
    , price: 35, image: "./img6.jpeg" }
];

export default function MainPage({ cart, setCart }) {
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="cart-container">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image"/>
<div className="text">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p> 
            <div className="addToCart" >
            <button onClick={() => addToCart(product)} className="add-to-cart">Add To Cart</button> 
            <img src="/heart.png" alt="heart" className="  hearticon"/>
            
            </div></div>
          </div>
        ))}
      </div>
    </div>
  );
}