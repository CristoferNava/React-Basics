import { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let firstName = 'Cristofer';
  let lastName = 'Nava';
  return (
      <Fragment>
        <Header 
          firstName={firstName}
          lastName={lastName}
        />
        <Footer />
      </Fragment>
  );
}

export default App;
