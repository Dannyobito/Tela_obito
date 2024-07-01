import React, { useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';

import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Email ID and Password are required');
      return;
    }
    fetch('https://face-recognition-app-api-ricy.onrender.com/signin',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      })
  }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error))
    console.log(`Login successful with email: ${email}`);
    setEmail('');
    setPassword('');
  };

  return (
    <div className='login'>
      <div className='header'>
        <h2>Login</h2>
        <hr/>
      </div>
      {errorMessage && <p className='error'>{errorMessage}</p>}
      <form onSubmit={handleSubmit} className='inputs'>
        <div className='input'>
          <img src={ email_icon } />
          <input 
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email ID...'
          />
        </div>
        <div className='input'>
          <img src={ password_icon } />
          <input 
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password...' 
          />
        </div>
        <button disabled={isLoading} type='submit' className='submit'>{isLoading ? "Loading...":"Login"}</button>

        <p>
          Yet to sign up on the app? Click here
          <Link to={"/signup"} className='sign-up'>
            Sign-up
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login;
