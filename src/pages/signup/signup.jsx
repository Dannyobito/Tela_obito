import React, { useState } from 'react';
import "./signup.css";

import user_icon from "../../assets/user.png";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    fetch('https://face-recognition-app-api-ricy.onrender.com/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              name: name,
              email: email,
              password: password
            })
        }).then(response => response.json()).then(createdUser => console.log(createdUser)).then(setIsLoading(false)).catch(error => {console.log(error); setIsLoading(false)})
  }

  return (
    <div className='signup'>
      <div className='header'>
        <h2>Sign-up</h2>
        <hr/>
      </div>
      <form onSubmit={(e)=>{onSubmit(e)}} className='inputs'>
        <div className='input'>
          <img src={ user_icon } />
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            placeholder='Name...' />
        </div>
        <div className='input'>
          <img src={ email_icon } />
          <input 
            type='email'
            id='email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            placeholder='Email ID...' />
          {/* <span id='email-error'>error-msg</span> */}
        </div>
        <div className='input'>
          <img src={ password_icon } />
          <input 
            type='password'
            id='password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder='Password...' />
        </div>
        <button disabled={isLoading? true :false} type='submit' className='submit'>{isLoading ? "Loading...":"Sign-up"}</button>
        
        <p>
          Previously logged in? Click here
          <Link to={"/login"} className='sign-up'>
            Login
          </Link>
        </p>        
      </form>
    </div>
  )
}

export default Signup;
