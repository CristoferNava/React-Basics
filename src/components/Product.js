import React from 'react';

const Product = ({product, products, cart, setCart, isCart}) => {
  const {id, name, price} = product;

  const addCart = id => {
    const productToAdd = products.filter(p => p.id === id)[0]
    setCart([
      ...cart,
      productToAdd
    ]);
  };

  const removeProduct = id => {
    const productsToKeep = cart.filter(p => p.id !== id);
    setCart(
      productsToKeep
    );
  };

  return (
    <div className="">
      <p>Producto: {name}. Precio: {price}</p>
      {!isCart
        ? (
          <button
            type="button"
            onClick={() => addCart(id)}
          >Agregar al carrito</button>
        )
        : (
          <button
            type="button"
            onClick={() => removeProduct(id)}
          >Eliminar del carrito</button>
        )
      }
      
    </div>
  );
};

export default Product;