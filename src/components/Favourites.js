import React from 'react';
import Header from './Header';

const Favourites = () => {
  const favouriteProducts = products.filter(product => favourites.includes(product._id));

  return (
    <div className="favourite-product-list">
      {favouriteProducts.map((product) => (
        <div key={product._id} className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button 
            className={`favourite-button ${favourites.includes(product._id) ? 'clicked' : ''}`} 
            onClick={() => handleFavouriteClick(product._id)}>
            <FaHeart />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
