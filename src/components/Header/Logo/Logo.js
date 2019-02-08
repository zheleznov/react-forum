import React from 'react';
import logoImage from '../../../assets/logo.svg';
import './Logo.css';

// TODO: routing

function Logo(props) {
  return (
      <a href="#" className="Logo">
        <img src={logoImage} alt="React Forum Logo"/>
      </a>
  );
}

export default Logo;
