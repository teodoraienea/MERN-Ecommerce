import React from 'react';
import './Loginstyle.css';
import { FaUserAlt , FaLock} from "react-icons/fa";

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder='Username' required/>
            <FaUserAlt className="icon"/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className="icon"/>
        </div>

        <button type="submit" className="button button-85"> Login</button>

        <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;