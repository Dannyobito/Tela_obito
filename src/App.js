import React from "react";
import Welcome from "./pages/welcome/welcome";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Dashboard from "./pages/dashboard/dashboard";
import { Routes, Route } from "react-router-dom";
import Redirect from "./pages/redirect/redirect";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import Navbar from './components/Navbar/navbar';

const App = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="app">
        <Routes>
          <Route path="" element={<Welcome />} />
          <Route path="/Tela" element={<Welcome />} />
          <Route path="/mailbox/*" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/googleredirect" element={<Redirect />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
