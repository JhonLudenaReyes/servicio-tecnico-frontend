import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import setAuthToken from "./components/utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Navigation from "./components/layout/navbar/Navigation";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/layout/Footer";
import Person from "./components/Person/PersonAdmin";
import PersonSave from "./components/Person/PersonForm";
import Client from "./components/Client/ClientAdmin";
import Permit from "./components/Permit/PermitAdmin";
import Role from "./components/Role/RoleAdmin";

import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

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
          <Container fluid style={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Row>
              <Col className="appColSidebar" lg={3}>
                <Sidebar />
              </Col>
              <Col>
                <Routes>
                  <Route exact path="/" element={<Landing />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/dashboard" element={<Dashboard />} />
                  <Route
                    exact
                    path="/administrator/person/admin"
                    element={<Person />}
                  />
                  <Route
                    exact
                    path="/administrator/person"
                    element={<PersonSave />}
                  />
                  <Route
                    exact
                    path="/administrator/client"
                    element={<Client />}
                  />
                  <Route exact path="/administrator/role" element={<Role />} />
                  <Route
                    exact
                    path="/administrator/permit"
                    element={<Permit />}
                  />
                </Routes>
              </Col>
            </Row>
          </Container>
          <Footer />
        </Router>
      </Provider>
    </>
  );
};

export default App;
