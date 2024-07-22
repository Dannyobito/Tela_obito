import React, { useState } from "react";
// import Login from '../login/login';
// import Signup from "../signup/signup";
import { Link, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import "./welcome.css";
import logo from "../../assets/TELA.png";
import login_icon from "../../assets/login.png";
import signup_icon from "../../assets/sign_up.png";

const Welcome = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const handleLoginSuccess = async (response) => {
    console.log(response);

    // try {
    //   const tokenInfo = response.credential;

    //   // Send the token to your backend
    //   const res = await axios.post("http://localhost:5000/oauth-callback", {
    //     tokenInfo,
    //   });

    //   if (res.data.success) {
    //     console.log(res.data);
    //     console.log("Successfully authenticated with Gmail API");
    //   } else {
    //     console.log(res);
    //     console.log("Authentication failed");
    //   }
    // } catch (error) {
    //   console.error("Login failed", error);
    // }
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/gmail.readonly",
    onSuccess: async (codeResponse) => {
      console.log("login-response", codeResponse);
      const { code } = codeResponse;
      // Exchange authorization code for tokens
      const tokenResponse = await axios.post(
        "http://localhost:5000/exchange-token",
        {
          code,
        }
      );
      console.log(tokenResponse);
      const { access_token, refresh_token } = tokenResponse.data;

      // Send the tokens to your backend
      const res = await axios.post("http://localhost:5000/oauth-callback", {
        access_token,
        refresh_token,
      });
      console.log(res);

      if (res.data.success) {
        console.log("Successfully authenticated with Gmail API");
        console.log(res);
      } else {
        console.log("Authentication failed");
      }
    },
    onError: (errorResponse) => console.log("error", errorResponse),
  });

  return (
    <div className="welcome">
      <img src={logo} />
      <h1 className="tela">Welcome To Tela</h1>
      <div className="buttons">
        <Link to="/login" className="button">
          <img src={login_icon} />
          Login
        </Link>
        <Link to="/signup" className="button">
          <img src={signup_icon} />
          Sign-up
        </Link>
        <GoogleOAuthProvider clientId={clientId}>
          <div>
            <button onClick={() => googleLogin()}>
              Sign in with Google 🚀
            </button>
          </div>
        </GoogleOAuthProvider>
      </div>

      <p>Project work in progress...</p>
    </div>
  );
};

export default Welcome;
