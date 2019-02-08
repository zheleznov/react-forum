import React from 'react';
import './ForumStats.css';

function ForumStats(props) {
  return (
    <div className="forum-stats desktop-only">
      <hr />
        <ul>
          <li><i className="fa fa-user-circle-o"></i>47 users online</li>
          <li><i className="fa fa-user-o"></i>497 users registered</li>
          <li><i className="fa fa-comments-o"></i>49 threads</li>
          <li><i className="fa fa-comment-o"></i>763 posts</li>
        </ul>
    </div>
  );
}

export default ForumStats;
