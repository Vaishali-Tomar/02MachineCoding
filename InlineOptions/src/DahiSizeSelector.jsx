// src/DahiSizeSelector.js

import React, { useState } from 'react';
import './DahiSizeSelector.css';

const DahiSizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (e) =>{
    setSelectedSize(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected: ${selectedSize}`);
  }
  return (
    <div className="dahi-size-selector">
      <h2>Select Size of Dahi</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="Small"
              checked={selectedSize === 'Small'}
              onChange={handleSizeChange}
            />
            Small
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Medium"
              checked={selectedSize === 'Medium'}
              onChange={handleSizeChange}
            />
            Medium
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Large"
              checked={selectedSize === 'Large'}
              onChange={handleSizeChange}
            />
            Large
          </label>
        </div>
        <button type="submit" disabled={!selectedSize}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DahiSizeSelector;
