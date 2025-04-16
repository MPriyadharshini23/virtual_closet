import React from 'react';
import { FaTshirt } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import '../styles/Closet.css'; // If you're using CSS for layout/styling
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1>Welcome to Your Virtual Closet</h1>
      <div className="features">
        <div className="feature-card" onClick={() => navigate('/planner')}>
          <FaTshirt size={60} color="#4e342e"/>
          <h3>Plan Outfits</h3>
          <p>Create and schedule your outfits with ease.</p>
        </div>
        <div className="feature-card" onClick={() => navigate('/view-closet')}>
          <GiClothes size={60} color="#4e342e" />
          <h3>View Closet</h3>
          <p>Explore your digital wardrobe anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
