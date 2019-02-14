import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './ForumHeader.css';

const ForumHeader = (props) => {
  let content = <p>{props.description}</p>;

  if (props.subForums) {
    const subForums = props.subForums.map(subForum => (
            <li><Link to={`/forum/${subForum['.key']}`}>{subForum.name}</Link></li>
        ),
    );
    content = <ul className="subforums">{subForums}</ul>;
  }

  return (
      <div className="forum-details">
        <Link className="text-xlarge" to={props.url}>{props.title}</Link>
        {content}
      </div>
  );
};

ForumHeader.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subForums: PropTypes.array,
};

export default ForumHeader;
