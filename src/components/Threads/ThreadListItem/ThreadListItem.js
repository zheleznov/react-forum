import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './ThreadListItem.css';

const ThreadListItem = ({thread, users, posts}) => {
  const threadUser = users[thread['userId']];
  const lastPost = posts[thread['lastPostId']];
  const lastPostUser = lastPost && users[lastPost['userId']];
  const timeDiferense = ((Date.now() - thread.lastPostAt) / 1000 / 60 / 60).toFixed();
  let activity;

  if(lastPost) {
    activity = (
        <div className="activity">
          <p className="replies-count">
            {Object.keys(thread.posts).length} reply
          </p>
          <img className="avatar-medium"
               src={lastPostUser.avatar}
               alt=""/>
          <div>
            <p className="text-xsmall">
              <Link
                  to={`/profile/${lastPostUser['_key']}`}>{lastPostUser.name}</Link>
            </p>
            <p className="text-xsmall text-faded">{timeDiferense} hours ago</p>
          </div>
        </div>
    )
  }

  return (
      <div className="thread">
        <div>
          <p>
            <Link to={`/thread/${thread['_key']}`}>{thread.title}</Link>
          </p>
          <p className="text-faded text-xsmall">
            By <Link
              to={`/profile/${threadUser['_key']}`}>{threadUser.name}</Link>, {thread.publishedAt}.
          </p>
        </div>

        {activity}
      </div>
  );
};

ThreadListItem.propTypes = {
  thread: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
};

export default ThreadListItem;
