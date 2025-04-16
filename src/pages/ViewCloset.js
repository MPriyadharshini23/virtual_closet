import React, { useEffect, useState } from 'react';
import '../styles/ViewCloset.css';
import axios from 'axios';
import { FaTransgender, FaUmbrella, FaTshirt } from 'react-icons/fa';

const ViewCloset = () => {
  const [closetItems, setClosetItems] = useState([]);

  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/closet');
        setClosetItems(res.data);
      } catch (err) {
        console.error('Error fetching outfits:', err);
      }
    };
    fetchOutfits();
  }, []);

  return (
    <div className="container">
      <h2> Your Closet</h2>

      <div className="row mt-4">
        {closetItems.length === 0 ? (
          <p className="text-center text-muted">No outfits saved yet.</p>
        ) : (
          closetItems.map((item) => (
            <div className="col-md-4 mb-3" key={item._id}>
              <div className="card shadow rounded p-3">
                <h5 className="card-title">{item.suggestion}</h5>
                <p className="card-text">
                  <FaTransgender className="icon" />
                  <strong>Gender:</strong> {item.gender} <br />
                  <FaTshirt className="icon" />
                  <strong>Occasion:</strong> {item.occasion} <br />
                  <FaUmbrella className="icon" />
                  <strong>Weather:</strong> {item.weather}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewCloset;
