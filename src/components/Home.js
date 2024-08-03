import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaPen } from 'react-icons/fa';
import Modal from 'react-modal';
import './Homestyle.css';
import Header from './Header';
import axios from 'axios';

Modal.setAppElement('#root');

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));

    try {
      const loggedInUser = localStorage.getItem('user');
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }, []);

  const handleSearch = (event) => {
    console.log('Search query:', event.target.value);
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  const openModal = (product) => {
    setEditProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setEditProduct(null);
    setImageFile(null);
    setModalIsOpen(false);
  };

  const handleSaveProduct = async () => {
    const formData = new FormData();
    for (const key in editProduct) {
      formData.append(key, editProduct[key]);
    }
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      let response;
      if (editProduct._id) {
        // Update product
        response = await axios.put(`/api/products/${editProduct._id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
          },
        });
        setProducts(products.map(p => p._id === response.data._id ? response.data : p));
      } else {
        // Add new product
        response = await axios.post('/api/products', formData, {
          headers: { 'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
         },
        });
        setProducts([...products, response.data]);
      }
      closeModal();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };


  const handleFavouriteClick = (productId) => {
    if (favourites.includes(productId)) {
      setFavourites(favourites.filter(id => id !== productId));
    } else {
      setFavourites([...favourites, productId]);
    }
  };

  return (
    <div className="home">
      <Header />
      <div className="top-bar">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." onChange={handleSearch} />
          <button className="button-85" onClick={handleSearch}>Search</button>
        </div>
        <button className="button-85 sign-in-button" onClick={handleSignIn}>Sign In</button>

        {/* Add Product Button */}
        {user && user.role === 'distributor' && (
          <button className="button-85 add-product-button" onClick={() => openModal(null)}>
            Add Product
          </button>
        )}
      </div>

      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            {user && user.role === 'distributor' && (
              <button className="edit-button" onClick={() => openModal(product)}>
                <FaPen />
              </button>
            )}
            <button 
              className={`favourite-button ${favourites.includes(product._id) ? 'clicked' : ''}`} 
              onClick={() => handleFavouriteClick(product._id)}>
                
              <FaHeart />
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Add/Edit Product */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
        <h2>{editProduct ? 'Edit Product' : 'Add Product'}</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={editProduct?.name || ''} onChange={handleInputChange} />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={editProduct?.price || ''} onChange={handleInputChange} />
          </label>
          <label>
            Category:
            <input type="text" name="category" value={editProduct?.category || ''} onChange={handleInputChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={editProduct?.description || ''} onChange={handleInputChange}></textarea>
          </label>
          <label>
            Image:
            <input type="file" onChange={handleFileChange} />
          </label>
          <label>
            Quantity:
            <input type="number" name="quantity" value={editProduct?.quantity || ''} onChange={handleInputChange} />
          </label>
          <button type="button" onClick={handleSaveProduct} className="button-85">Save</button>
          <button type="button" onClick={closeModal} className="button-85">Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default Home;
