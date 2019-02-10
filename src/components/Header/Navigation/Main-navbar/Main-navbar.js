import React from 'react';
import './Main-navbar.css';

function MainNavbar(props) {
  return (
    <ul>
      <li className="navbar-item">
        <a href="register.html">Register</a>
      </li>

      <li className="navbar-item">
        <a href="login.html">Login</a>
      </li>

      <li className="navbar-item mobile-only">
        <a href="profile.html">My Profile</a>
      </li>
      <li className="navbar-item mobile-only">
        <a href="#">Logout</a>
      </li>
    </ul>
  );
}

export default MainNavbar;
