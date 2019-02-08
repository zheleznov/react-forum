import React from 'react';
import './Main-navbar.css';

function MainNavbar(props) {
  return (
    <ul>
      <li className="navbar-item">
        <a href="index.html">Home</a>
      </li>
      <li className="navbar-item">
        <a href="category.html">Category</a>
      </li>
      <li className="navbar-item">
        <a href="forum.html">Forum</a>
      </li>
      <li className="navbar-item">
        <a href="thread.html">Thread</a>
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
