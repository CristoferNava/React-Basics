import { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

function App() {
  // products is the state (an array in this case), setProducts is a function that modifies the state
  // and we can pass an initial states as argument into the useState function
  let [products, setProducts] = useState([
    { id: 1, name: 'Camisa React', price: 200},
    { id: 2, name: 'Camisa Django', price: 190},
    { id: 3, name: 'Camisa Angular', price: 205},
  ]);
  
 
  return (
      <Fragment>
        <Header 
          title='Tienda Virtual'
        />

        <h2>Lista de Productos</h2>
        {products.map(product => (
          <Product 
            key={product.id}
            product={product}
          />
        ))}
        

        <Footer />
      </Fragment>
  );
}

export default App;
