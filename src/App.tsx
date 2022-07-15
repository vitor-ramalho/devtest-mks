import './App.css';
import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from './components/Navbar';
import { ProductList } from './components/ProductList';
import {ToastContainer} from 'react-toastify';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

function App() {

  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <ProductList/>
      <ShoppingCart/>
      <Footer />
    </React.Fragment>
  )
}

export default App
