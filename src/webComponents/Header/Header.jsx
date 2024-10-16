import React from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Optional: For styling

const Header = () => {
    const navigate = useNavigate();
  
    return (
      <header className="navbar">
        <h1 className="navbar-logo">NextTrip</h1>
        <div className="navbar-buttons">
          <button className="nav-button" onClick={() => navigate('/homePage')}>Home</button>
          <button className="nav-button" onClick={() => navigate('/trips')}>Trips</button>
          <button className="nav-button" onClick={() => navigate('/about')}>About</button>
        </div>
      </header>
    );
  };

export default Header;

