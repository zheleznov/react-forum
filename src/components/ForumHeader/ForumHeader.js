import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './ForumHeader.css';

const ForumHeader = (props) => {
  return (
      <div className="forum-details">
        <Link className="text-xlarge" to={props.url}>{props.title}</Link>
        <p>{props.description}</p>
      </div>
  );
};

ForumHeader.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ForumHeader;
