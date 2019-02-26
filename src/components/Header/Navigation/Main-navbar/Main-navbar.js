import React from 'react';
import {NavLink} from 'react-router-dom';
import './Main-navbar.css';

function MainNavbar() {
  return (
      <ul>
        <li className="navbar-item">
          <NavLink to="/registration" activeClassName="active">Register</NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </li>

        <li className="navbar-item mobile-only">
          <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
        </li>
        <li className="navbar-item mobile-only">
          <a href="#">Logout</a>
        </li>
      </ul>
  );
}

export default MainNavbar;
