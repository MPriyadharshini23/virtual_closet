import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="main-content">
        <header className="hero-section text-center">
          <h1 className="main-title">Your Virtual Closet</h1>
          <p className="subtitle">Style. Organize. Simplify your wardrobe experience.</p>
          <button
            className="btn-brown mt-3"
            onClick={() => navigate("/login")}
          >
            Get Started
          </button>
        </header>

        <section className="container mt-5 text-center">
          <h3 className="mb-4">How It Works</h3>
          <div className="row justify-content-center">
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="p-3 bg-white rounded shadow-sm">
                <h5>1. Sign Up</h5>
                <p>Create your account to get started.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="p-3 bg-white rounded shadow-sm">
                <h5>2. Add Outfits</h5>
                <p>Upload your clothes and organize your closet.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="p-3 bg-white rounded shadow-sm">
                <h5>3. Plan Looks</h5>
                <p>Choose outfits based on occasion and weather.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer text-center py-3">
        <p>&copy; 2025 Virtual Closet. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
