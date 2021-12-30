import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import setAuthToken from "./components/utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navigation from "./components/layout/navbar/Navigation";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import Person from "./components/Person/PersonRegister";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = JSON.parse(localStorage.jwtToken);
  setAuthToken(token);
  // Decode token and get user info and exp
  //const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(token));
}

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/administrator/person" element={<Person/>}/> 
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
};

export default App;
