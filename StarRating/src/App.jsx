
import React, { useState } from 'react';
import './App.css';

const Star = ({filled, onclick}) => {
  return(
    <span onClick={onclick} style={{cursor: 'pointer', color: filled ? 'gray' : 'gold'}}> &#9733; </span>
  )
}

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return(
    <div>
      {Array.from({length: totalStars}, (v, i) => (
        <Star key={i} filled={i<rating} onclick={() => setRating(i + 1)} />
      ))}
      <p>{rating} of {totalStars} stars</p>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <h1>Star Rating Component</h1>
      <StarRating totalStars={5} />
    </div>
  );
};

export default App;