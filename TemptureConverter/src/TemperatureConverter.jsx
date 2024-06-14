import Reac, { useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState(null);

  const handleChange = (e) => {
    setCelsius(e.target.value);
  };

  const handleConvert = () => {
    const celsiusValue = parseFloat(celsius);
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    } else {
      setFahrenheit("Invalid input");
    }
  };

  const handleClear = () => {
    setCelsius("");
    setFahrenheit(null);
  };

  return (
    <div>
      <h1>Temperature in celcius</h1>
      <div>
        <label>
          Enter Temperature in Celsius:
          <input
            type="number"
            value={celsius}
            onChange={handleChange}
            placeholder="Enter temperature"
          />
        </label>
      </div>
      <div>
        <button onClick={handleConvert}>Convert</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div>
        <h2>Converterd Temperature:</h2>
        {fahrenheit !== null && <p>{fahrenheit} F</p>}
      </div>
    </div>
  );
};

export default TemperatureConverter;
