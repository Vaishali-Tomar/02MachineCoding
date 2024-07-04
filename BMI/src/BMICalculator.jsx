import React, { useState } from "react";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");

  const calculateBMI = () => {
    if(height > 0 && weight > 0){
      const heightInMeter = height / 100;
      const bmiValue = (weigth /(heightInMeter * heightInMeter)).toFixed(2);
      setBmi(bmiValue);
      deterMineCatogery(bmiValue);
    }
  }
  const deterMineCatogery = (bmi) => {
    if(bmi < 18.5){
      setBmiCategory('UnderWeight');
    }else if(bmi > 18.5 && bmi < 24.3){
      setBmiCategory('Healthy Weight');
    }else if(bmi >= 25 && bmi < 29.6){
      setBmiCategory('OverWeigth');
    }else if (bmi >= 30) {
      setBmiCategory('Obese');
    }
  }
  return (
    <div>
      <h1>BMI calculator</h1>
      <div>
        <label>
          Height(cm)
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min="0"
          />
        </label>
      </div>
      <div>
        <label>
          weight(cm)
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            min="0"
          />
        </label>
      </div>
      <button onClick={calculateBMI}>calculate</button>
      {bmi && (
        <div>
          <h2>BMI = {bmi}</h2>
          <h3>{bmiCategory}</h3>
        </div>
      )}
      <div>
        <h2>BMI Weight Ranges</h2>
        <p>Less than 18.5 = Underweight</p>
        <p>Between 18.5 - 24.9 = Healthy Weight</p>
        <p>Between 25 - 29.9 = Overweight</p>
        <p>Over 30 = Obese</p>
      </div>
    </div>
  );
};

export default BMICalculator;
