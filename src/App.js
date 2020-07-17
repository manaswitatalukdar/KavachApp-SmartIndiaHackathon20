import React, { useState } from "react";
import "./App.css";
import Darkmode from "darkmode-js";
import Home from "./components/Home";
import Profiles from "./components/Profiles";
import Reports from "./components/Reports";
import Notifications from "./components/Notifications";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import imageLight from "./kawach-logo-light.jpg";
import imageDark from "./kawach-logo-dark.jpg";

var options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

const Li = styled.div`
  display: inline-block;
  margin-left: 0.5em;
  padding: 1em 1.5em;
  letter-spacing: 0.2em;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 600;
  text-transform: uppercase;
  outline: 0;
  transition: 0.5s ease-in-out;
`;

function App() {
  return (
    <Router>
      <div className="app">
        <div id="header-wrapper">
          <div id="header" className="container">
            <div id="logo">
              <div className="logo"></div>{" "}
            </div>
            <div id="menu">
              <nav className="navbar">
                <NavLink
                  exact
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to="/"
                >
                  <Li>Home</Li>
                </NavLink>
                <NavLink
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to="/profiles"
                >
                  <Li>Profiles</Li>
                </NavLink>
                <NavLink
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to="/reports"
                >
                  <Li>Reports</Li>
                </NavLink>
                <NavLink
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to="/notifications"
                >
                  <Li>Notifications</Li>
                </NavLink>
                <NavLink
                  activeClassName="navbar__link--active"
                  className="navbar__link"
                  to="/dashboard"
                >
                  <Li>Dashboard</Li>
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/reports" component={Reports} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
