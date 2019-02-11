import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import logoImage from '../../../assets/logo.svg';
import './Logo.css';

function Logo() {
  return (
      <Fragment>
        <Link to="/" className="Logo">
          <img src={logoImage} alt="React Forum Logo"/>
        </Link>
      </Fragment>
  );
}

export default Logo;
