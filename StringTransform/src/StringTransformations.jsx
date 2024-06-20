import React from "react";
import { useState } from "react";

const toUpperCase = (str) => str.toUpperCase();
const toLowerCase = (str) => str.toLowerCase();
const toCamalCase = (str) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/g, "");
const toPascalCase = (str) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
    .replace(/\s+/g, "");
const trimString = (str) => str.trim();
const StringTransformations = () => {
  const [input, setInput] = useState("");
  const [transformed, setTransformed] = useState("");

  const handleTransform = (transformation) => {
    switch(transformation) {
        case 'uppercase': 
        setTransformed(toUpperCase(input));
        break;
        case 'lowercase': 
        setTransformed(toLowerCase(input));
        break;
        case 'camalCase': 
        setTransformed(toCamalCase(input));
        break;
        case 'pascalCase': 
        setTransformed(toPascalCase(input));
        break;
        case 'trim': 
        setTransformed(trimString(input));
        break;
        default: 
        setTransformed(input)
    }
  }
  return (
    <div>
      <h1>String Transformations</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter text"
      />
      <div>
      <button onClick={() => handleTransform('uppercase')}>Uppercase</button>
        <button onClick={() => handleTransform('lowercase')}>Lowercase</button>
        <button onClick={() => handleTransform('camelCase')}>Camel Case</button>
        <button onClick={() => handleTransform('pascalCase')}>Pascal Case</button>
        <button onClick={() => handleTransform('trim')}>Trim</button>
      </div>
      <h2>Transformed String</h2>
      <p>{transformed}</p>
    </div>
  );
};

export default StringTransformations;
