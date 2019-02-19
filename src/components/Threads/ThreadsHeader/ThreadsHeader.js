import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ThreadsHeader = ({name, description}) => {
  return (
      <div className="forum-header">
        <div className="forum-details">
          <h1>{name}</h1>
          <p className="text-lead">{description}</p>
        </div>
        <Link to="/new-thread" className="btn-green btn-small">Start a
          thread</Link>
      </div>
  );
};

ThreadsHeader.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ThreadsHeader;
