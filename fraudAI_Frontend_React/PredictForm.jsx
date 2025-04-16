import React, { useState } from "react";
import axios from "axios";

const PredictForm = () => {
  const [features, setFeatures] = useState([
    0.0077721980079471205,
    0.46153846153846156,
    0.0,
    0.0,
    0.0,
    0.11908418421807722,
    0.7942634013278564,
    0.17217382428507993,
    0.7869361310365848,
    0.0,
    0.0,
    0.0,
    0.41400308521923995,
    0.1869060352964757,
    0.0,
    0.0,
    0.0,
    0.0,
    0.0,
    1.0,
    1.0,
    0.0
  ]); // Adjust for your feature count
  const [prediction, setPrediction] = useState(null);
  const [probability, setProbability] = useState(null);

  const handleInputChange = (index, value) => {
    const updatedFeatures = [...features];
    updatedFeatures[index] = parseFloat(value);
    setFeatures(updatedFeatures);
  };

  const handlePredict = async () => {
    try {
      const response = await axios.post("https://jubilant-umbrella-9pq54p5j44gc96v-5000.app.github.dev/predict", {
        features: features,
      });
      setPrediction(response.data.prediction);
      setProbability(response.data.probability);
    } catch (error) {
      console.error("Error during prediction:", error);
    }
  };

  return (
    <div>
      <h2>Random Forest Prediction</h2>
      <div>
        {features.map((_, index) => (
          <div key={index}>
            <label>Feature {index + 1}:</label>
            <input
              type="number"
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button onClick={handlePredict}>Predict</button>
      {prediction !== null && (
        <div>
          <h3>Prediction: {prediction}</h3>
          <h4>Probabilities:</h4>
          <ul>
            {probability &&
              probability.map((prob, idx) => (
                <li key={idx}>
                  Class {idx}: {prob.toFixed(2)}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PredictForm;
