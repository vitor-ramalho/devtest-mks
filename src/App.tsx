import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from './components/Navbar';
import { ProductList } from './components/ProductList';
import {ToastContainer} from 'react-toastify';
import ShoppingCart from './components/ShoppingCart';

function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <ProductList/>
      <ShoppingCart />
    </>
  )
}

export default App
