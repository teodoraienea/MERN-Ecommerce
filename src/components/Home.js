import React from 'react';
import './Homestyle.css'; // Ensure this file is created and updated with the button-85 CSS

const Home = () => {
  const handleSearch = (event) => {
    console.log('Search query:', event.target.value);
  };

  const handleSignIn = () => {
    console.log('Sign in clicked');
  };

  return (
    <div className="home">
      <h2>Welcome to My E-Commerce Shop</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search products..." onChange={handleSearch} />
        <button className="button-85" onClick={handleSearch}>Search</button>
      </div>

      {/* Sign In Button */}
      <button className="button-85" onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Home;
