import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './ForumPreview.css';

const ForumPreview = ({description, url, title, subForums, classes}) => {
  let content = <p className="forum-description">{description}</p>;

  if (subForums) {
    const subForumsToRender = subForums.map(subForum => (
            <li key={subForum['.key']}>
              <Link to={`/forum/${subForum['.key']}`}>{subForum.name}</Link>
            </li>
        ),
    );
    content = <ul className="subforums">{subForumsToRender}</ul>;
  }

  return (
      <div className="forum-details">
        <Link className={classes || 'text-xlarge'} to={url}>{title}</Link>
        {content}
      </div>
  );
};

ForumPreview.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subForums: PropTypes.array,
  classes: PropTypes.string,
};

export default ForumPreview;
