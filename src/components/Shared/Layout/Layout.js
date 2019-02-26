import React from 'react';
import './Layout.css';

const Layout = (props) => {
  return (
      <div className="container-layout">
        {props.children}
      </div>
  );
};

export default Layout;
