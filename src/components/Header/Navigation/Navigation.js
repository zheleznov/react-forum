import React from 'react';
import './Navigation.css';
import UserNavbar from "./User-navbar";
import MainNavbar from './Main-navbar';

function Navigation(props) {
  return (
    <nav className="navbar">
      <MainNavbar />
    </nav>
  );
}

export default Navigation;
