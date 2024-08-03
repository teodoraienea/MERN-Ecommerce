import React from 'react';
import './Loginstyle.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/users/login', { email, password });
      console.log('Login response:', res.data);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      window.location.href = '/';
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input 
            type="text" 
            placeholder='Email'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaUserAlt className="icon" />
        </div>
        <div className="input-box">
          <input 
            type="password" 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <FaLock className="icon" />
        </div>
        <button type="submit" className="button button-85">Login</button>
        {error && <div className="error">{error}</div>}
        <div className="register-link">
          <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
