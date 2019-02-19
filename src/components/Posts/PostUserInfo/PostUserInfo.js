import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const PostUserInfo = ({user}) => {
  const {posts, threads} = user;
  const postsCount = posts ? Object.keys(posts).length : 0;
  const threadsCount = threads ? Object.keys(threads).length : 0;

  return (
      <div className="user-info">
        <Link to={`/profile/${user['.key']}`}
              className="user-name">
          {user.name}
        </Link>

        <Link to={`/profile/${user['.key']}`}>
          <img className="avatar-large"
               src={user.avatar}
               alt=""
          />
        </Link>

        <p className="desktop-only text-small">{postsCount} posts</p>
        <p className="desktop-only text-small">{threadsCount} threads</p>
        <span className="online desktop-only">online</span>
      </div>
  );
};

PostUserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PostUserInfo;
