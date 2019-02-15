import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './ThreadListItem.css';

const ThreadListItem = (props) => {
  const {thread, users, posts} = props;
  const threadUser = users[thread['userId']];
  const lastPost = posts[thread['lastPostId']];
  const lastPostUser = users[lastPost['userId']];

  return (
    <div className="thread">
      <div>
        <p>
          <Link to={`/thread/${thread['.key']}`}>{thread.title}</Link>
        </p>
        <p className="text-faded text-xsmall">
          By <Link to={`/profile/${threadUser['.key']}`}>{threadUser.name}</Link>, {thread.publishedAt}.
        </p>
      </div>

      <div className="activity">
        <p className="replies-count">
          {Object.keys(thread.posts).length} reply
        </p>
        <img className="avatar-medium"
             src={lastPostUser.avatar}
             alt=""/>
        <div>
          <p className="text-xsmall">
            <Link to={`/profile/${lastPostUser['.key']}`}>{lastPostUser.name}</Link>
          </p>
          <p className="text-xsmall text-faded">{thread.lastPostAt}</p>
        </div>
      </div>
    </div>
  );
};

ThreadListItem.propTypes = {
  thread: PropTypes.object.isRequired
};

export default ThreadListItem;
