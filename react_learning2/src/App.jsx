import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import {  NavLink, Route, Routes } from "react-router-dom";
import Shop from "./components/Shop";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  

  return (
    <div>
      {/* now add link on main page to navigate */}
      <nav className="navbar">
        <h2 className="logo">myWebsite</h2>
        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          
        </div>
      </nav>
      {/* router and routes */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

/*
What is React Router?
React Router is a library that provides routing capabilities for React applications.

Routing means handling navigation between different views.

React Router is the standard routing library for React applications. It enables you to:

Create multiple pages in your single-page application
Handle URL parameters and query strings
Manage browser history and navigation
Create nested routes and layouts
Implement protected routes for authentication
Without a router, your React application would be limited to a single page with no way to navigate between different views.

*/

// npm install react-router-dom
