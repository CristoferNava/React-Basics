import React from 'react';
import Product from './Product';
import './cart.css';

const Cart = ({cart, setCart, products, isCart}) => {
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Tu carrito de compras está vacío</h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Tu carrito de compras</h2>
      {cart.map(product => (
        <Product 
          key={product.id}
          product={product}
          products={products}
          isCart={isCart}
          setCart={setCart}
          cart={cart}
        />
      ))}
    </div>
  );
};

export default Cart;