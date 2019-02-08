import React from 'react';
import arrowImg from '../../../../assets/arrow-profile.svg';
import './User-navbar.css';

function UserNavbar(props) {
  return (
    <ul>
      <li className="navbar-user">
        <a href="#">
          <img className="avatar-small" src="https://pbs.twimg.com/profile_images/881260299420041217/GMVGlDea_400x400.jpg" alt=""/>
          <span>Alex Kyriakidis
            <img className="icon-profile" src={arrowImg} alt=""/>
          </span>
        </a>

        <div id="user-dropdown">
          <div className="triangle-drop"></div>
          <ul className="dropdown-menu">
            <li className="dropdown-menu-item"><a href="profile.html">View profile</a></li>
            <li className="dropdown-menu-item"><a href="#">Log out</a></li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

export default UserNavbar;
