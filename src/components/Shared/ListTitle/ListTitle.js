import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './ListTitle.css';

const ListTitle = (props) => {
  if (!props.url) {
    return <h2 className="list-title">{props.title}</h2>;
  } else {
    return (
        <h2 className="list-title">
          <Link to={props.url}>{props.title}</Link>
        </h2>
    );
  }
};

ListTitle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default ListTitle;
