import React from 'react';
import PropTypes from 'prop-types';
import './ForumThreadsCounter.css';

const ForumThreadsCounter = (props) => {
  return (
      <div className="threads-count">
        <p>
          <span className="count">{props.count}</span>{props.count > 1 ?
            ' threads' :
            ' thread'}
        </p>
      </div>
  );
};

ForumThreadsCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ForumThreadsCounter;
