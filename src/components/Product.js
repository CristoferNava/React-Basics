import React from 'react';

const Product = ({product}) => {
  const {id, name, price} = product;

  const addCart = id => {
    console.log('Comprando ', id);
    
  };

  return (
    <div className="">
      <p>Producto: {name}. Precio: {price}</p>
      <button
        type="button"
        onClick={() => addCart(id)}
      >Agregar al carrito</button>
    </div>
  );
};

export default Product;