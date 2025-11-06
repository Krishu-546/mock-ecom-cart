import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        console.log('Fetched products:', res.data);
        setProducts(res.data);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        products.map(p => (
          <div key={p.id} className="product-card">
            <p>{p.name} - ₹{p.price}</p>
            <button onClick={() => addToCart(p.id)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
