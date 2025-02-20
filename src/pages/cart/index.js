import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const CartPage = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]); 
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
  
    navigate("/thankyou"); 
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))}
          <h2 className="cart-total">Total: ${totalPrice}</h2>

          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};
