import React from 'react';

const PageContent = (props) => {
  return (
      <div className="container">

        <div className="col-full">
          {props.children}
        </div>
      </div>
  );
};

export default PageContent;
