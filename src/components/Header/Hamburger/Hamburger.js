import React from 'react';
import './Hamburger.css';

function Hamburger(props) {
  return (
    <div className="btn-hamburger">
      <div className="top bar"></div>
      <div className="middle bar"></div>
      <div className="bottom bar"></div>
    </div>
  );
}

export default Hamburger;
