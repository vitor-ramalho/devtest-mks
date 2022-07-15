import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from './components/Navbar';
import { ProductList } from './components/ProductList';
import {ToastContainer} from 'react-toastify';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <ToastContainer />
      <Navbar />
      <ProductList/>
      <ShoppingCart/>
      <Footer />
    </>
  )
}

export default App
