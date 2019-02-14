import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './ForumPreview.css';

const ForumPreview = ({description, url, title, subForums}) => {
  let content = <p>{description}</p>;

  if (subForums) {
    const subForumsToRender = subForums.map(subForum => (
            <li><Link to={`/forum/${subForum['.key']}`}>{subForum.name}</Link></li>
        ),
    );
    content = <ul className="subforums">{subForumsToRender}</ul>;
  }

  return (
      <div className="forum-details">
        <Link className="text-xlarge" to={url}>{title}</Link>
        {content}
      </div>
  );
};

ForumPreview.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subForums: PropTypes.array,
};

export default ForumPreview;
