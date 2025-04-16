import React, { useState } from 'react';
import axios from 'axios';
import '../styles/OutfitForm.css';
import { FaMale, FaFemale, FaCloudSun, FaCloudRain, FaSnowflake } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';

const OutfitForm = () => {
  const [gender, setGender] = useState('');
  const [occasion, setOccasion] = useState('');
  const [weather, setWeather] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSuggestOutfit = () => {
    let outfit = '';

    if (gender === 'female') {
      if (occasion === 'casual' && weather === 'sunny') {
        outfit = 'Floral dress with sandals and sunglasses';
      } else if (occasion === 'formal') {
        outfit = 'Elegant saree or satin shirt with pants/skirt';
      } else if (weather === 'rainy') {
        outfit = 'Denim with a waterproof jacket and boots';
      } else {
        outfit = 'Comfy top and jeans';
      }
    } else if (gender === 'male') {
      if (occasion === 'casual' && weather === 'sunny') {
        outfit = 'T-shirt with shorts and sneakers';
      } else if (occasion === 'formal') {
        outfit = 'Formal shirt and trousers with loafers';
      } else if (weather === 'rainy') {
        outfit = 'Hoodie with joggers and waterproof shoes';
      } else {
        outfit = 'Basic tee and jeans';
      }
    } else {
      outfit = 'Please select gender';
    }

    setSuggestion(outfit);
    setSaved(false);
  };

  const handleSaveOutfit = async () => {
    try {
      const outfitData = {
        gender,
        occasion,
        weather,
        suggestion
      };

      const response = await axios.post('http://localhost:5000/api/closet', outfitData);

      if (response.status === 201 || response.status === 200) {
        setSaved(true);
      }
    } catch (error) {
      console.error('Error saving outfit:', error);
      alert('Failed to save outfit. Please try again.');
    }
  };

  return (
    <div className="outfit-form-container">
      <div className="outfit-form-box">
        <h3><GiClothes /> Suggest an Outfit</h3>

        <div className="mb-3 gender-icons">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <FaMale /> Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <FaFemale /> Female
          </label>
        </div>

        <div className="mb-3">
          <label>Occasion:</label>
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="form-select">
            <option value="">Select Occasion</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
          </select>
        </div>


        <div className="mb-3">
          <label>Weather:</label>
          <select value={weather} onChange={(e) => setWeather(e.target.value)} className="form-select">
            <option value="">Select Weather</option>
            <option value="sunny"><FaCloudSun /> Sunny</option>
            <option value="rainy"><FaCloudRain /> Rainy</option>
            <option value="cold"><FaSnowflake /> Cold</option>
          </select>
        </div>

        <button className="btn btn-primary me-2" onClick={handleSuggestOutfit}>
          Suggest Outfit
        </button>

        {suggestion && (
          <button className="btn btn-success" onClick={handleSaveOutfit}>
            Save to Closet
          </button>
        )}

        {suggestion && (
          <div className="mt-3 alert alert-info">
            <strong>Suggestion:</strong> {suggestion}
          </div>
        )}

        {saved && (
          <div className="mt-2 alert alert-success">
            🎉 Outfit saved to your closet!
          </div>
        )}
      </div>
    </div>
  );
};

export default OutfitForm;
