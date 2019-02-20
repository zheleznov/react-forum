import React from 'react';
import PropTypes from 'prop-types';
import './ForumStats.css';

function ForumStats({stats}) {
  const {postsCount, threadsCount, usersCount, usersOnline} = stats;

  return (
      <div className="forum-stats desktop-only push-top">
        <hr/>
        <ul>
          <li><i className="fa fa-user-circle-o"></i>{usersOnline} users online</li>
          <li><i className="fa fa-user-o"></i>{usersCount} users registered</li>
          <li><i className="fa fa-comments-o"></i>{threadsCount} threads</li>
          <li><i className="fa fa-comment-o"></i>{postsCount} posts</li>
        </ul>
      </div>
  );
}

ForumStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default ForumStats;
