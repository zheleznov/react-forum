import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './ForumPreview.css';

const ForumPreview = ({description, url, title, forumsIds, classes, forums}) => {
  let content = <p className="forum-description">{description}</p>;

  if (forumsIds) {
    const subForumsToRender = Object.keys(forumsIds).map(id => (
            <li key={id}>
              <Link to={`/forum/${id}`}>{forums[id].name}</Link>
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

const mapStateToProps = ({data: {forums}}) => {
  return {
    forums
  }
};

ForumPreview.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subForums: PropTypes.array,
  classes: PropTypes.string,
};

export default connect(mapStateToProps)(ForumPreview);
