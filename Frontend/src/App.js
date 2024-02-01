import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [foodName, setFoodName] = useState('');
  const [results, setResults] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const searchFood = async () => {
    try {
      const response = await axios.post('http://localhost:3001/search', { foodName });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Define background styles for light and dark modes
  const backgroundStyle = {
    background: darkMode
      ? 'linear-gradient(135deg, #485563 0%, #29323c 100%)' // Dark Mode Gradient
      : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Light Mode Gradient
    minHeight: '100vh', // Ensure background covers full viewport height
    color: darkMode ? '#ffffff' : '#000000'
  };

  return (
    <div style={backgroundStyle} className="container mt-5 p-4 rounded">
      <div className="row mb-3">
        <div className="col">
          <h1>Food Nutrition Search 🍊 🥦 🍎</h1>
        </div>
        <div className="col text-end">
          <button onClick={toggleDarkMode} className={`btn ${darkMode ? 'btn-light' : 'btn-dark'}`}>
            Toggle Dark Mode
          </button>
        </div>
      </div>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter food item"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button className="btn btn-primary" onClick={searchFood}>Search</button>
      </div>

      {results.length > 0 && (
        <div>
          <h2>Results</h2>
          <table className={`table ${darkMode ? 'table-dark' : 'table-light'}`}>
            <thead>
              <tr>
                <th>Food Item</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
