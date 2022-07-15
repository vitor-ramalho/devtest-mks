import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { productsApi } from './features/productsApi';
import cartReducer, { getTotals } from './features/cartSlice';

const store = configureStore({
  reducer: { 
    [productsApi.reducerPath]: productsApi.reducer, 
    cart: cartReducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});

store.dispatch(getTotals())

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
