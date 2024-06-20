
import React, { useState } from 'react';

const Todo = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, { id: Date.now(), text: inputValue }]);
    setInputValue('');
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Shopping Cart Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ marginTop: '10px' }}>
            {item.text}
            <button
              onClick={() => removeItem(item.id)}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;