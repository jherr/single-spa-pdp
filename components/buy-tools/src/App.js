import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>
        Select the dog
      </h1>
      <div>
        <button
          className="btn"
          onClick={() => {window.pdp.product.setProduct('Dog 1', 'https://images.dog.ceo/breeds/puggle/IMG_071023.jpg')}}
        >
          Dog 1
        </button>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {window.pdp.product.setProduct('Dog 2', 'https://images.dog.ceo/breeds/basenji/n02110806_1826.jpg')}}
        >
          Dog 2
        </button>
      </div>

      <h1>
        Adopt the dog
      </h1>
      <div>
        <button
          className="btn"
          onClick={() => {window.pdp.cart.addToCart()}}
        >
          Adopt It!
        </button>
      </div>
    </div>
  );
}

export default App;
