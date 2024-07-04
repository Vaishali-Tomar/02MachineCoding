
// import React, { useState } from 'react';

// const Todo = () => {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addItem = () => {
//     if (inputValue.trim() === '') return;
//     setItems([...items, { id: Date.now(), text: inputValue }]);
//     setInputValue('');
//   };

//   const removeItem = (id) => {
//     setItems(items.filter(item => item.id !== id));
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Shopping Cart Todo List</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Add a new item"
//       />
//       <button onClick={addItem}>Add</button>
//       <ul>
//         {items.map(item => (
//           <li key={item.id} style={{ marginTop: '10px' }}>
//             {item.text}
//             <button
//               onClick={() => removeItem(item.id)}
//               style={{ marginLeft: '10px' }}
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Todo;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.frontendeval.com/fake/food/';

const MiniTodo = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchItems = async () => {
      if (inputValue.trim() === '') {
        setItems([]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}${inputValue}`);
        if (response.data) {
          console.log(response.data);
          setItems(response.data); // Assuming response.data is an array of items
        } else {
          setItems([]);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    searchItems();
  }, [inputValue]); // Run this effect whenever `inputValue` changes

  const handleSearch = () => {
    // This will trigger the useEffect when called
    // No need to duplicate the logic here, useEffect handles it
    // searchItems();
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      <h1>Shopping Cart Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search for items"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.length > 0 ? (
            items.map((item, id) => (
              <li key={id}>
                {item.name} ({item.brand})
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </li>
            ))
          ) : (
            <li key="no-items">No items found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default MiniTodo;


