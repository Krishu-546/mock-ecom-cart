import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    // Dummy product lookup (replace with real fetch later)
    const product = {
      id: productId,
      name: productId === 1 ? 'T-shirt' : productId === 2 ? 'Shoes' : 'Watch',
      price: productId === 1 ? 299 : productId === 2 ? 999 : 1499
    };
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
  <div>
    <h1>Mock E-Com Cart</h1>
    <ProductList addToCart={addToCart} />
    <Cart cartItems={cartItems} removeFromCart={removeFromCart} />

    <button onClick={() => alert(`Checkout successful!\nTotal: ₹${cartItems.reduce((sum, item) => sum + item.price, 0)}\nTime: ${new Date().toLocaleString()}`)}>
      Checkout
    </button>
  </div>
);
}

export default App;