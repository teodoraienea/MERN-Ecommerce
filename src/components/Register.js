import React, { useState } from 'react';
import axios from 'axios';
import './Registerstyle.css';
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', { username, email, password });
      setSuccess('Registration successful. You can now log in.');
      setUsername('');
      setEmail('');
      setPassword('');
      setError('');
      window.location.href = '/login';
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={onSubmit}>
        <h1>Register</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUserAlt className="icon" />
        </div>
        <div className="input-box">
          <input
            type="text"
            id="email"
            placeholder='Email'
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <button type="submit" className="button button-85">Register</button>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
