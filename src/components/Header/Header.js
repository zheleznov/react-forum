import React from 'react';
import './Header.css';
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Navigation from "./Navigation";

function Header(props) {
  return (
    <div>
      <header className="header" id="header">
        <Logo />
        <Hamburger />
        <Navigation />
      </header>
    </div>
  );
}

export default Header;
