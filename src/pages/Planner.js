import React from 'react';
import OutfitForm from '../components/OutfitForm';
import '../styles/OutfitForm.css';

console.log(OutfitForm); 
const Planner = () => {
  return (
    <div className="planner-page">
      <h1 className="planner-title">Plan Your Outfit</h1>
      <OutfitForm />
    </div>
  );
};

export default Planner;
