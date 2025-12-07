import React, { useState } from 'react';
import ProductList from './ProductList/ProductList';
import CartDialog from './CartDialog/CartDialog';
import './App.css';
import { useSelector } from 'react-redux';

export default function App() {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const itemCount = Object.values(cart.items || {}).reduce((acc, x) => acc + x.qty, 0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Shopping</h1>
        <div className="cart-button" onClick={() => setOpen(true)} role="button" tabIndex={0}>
          🛒
          <span className="cart-count">{itemCount}</span>
        </div>
      </header>

      <main>
        <ProductList />
      </main>

      <CartDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
