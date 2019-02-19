import React from 'react';
import PropTypes from 'prop-types';
import PostUserInfo from '../PostUserInfo';
import PostContent from '../PostContent';

const PostsListItem = ({post, users}) => {
  const {userId} = post;
  const postUser = users[userId];

  return (
      <div className="post">
        <PostUserInfo user={postUser}/>
        <PostContent post={post}/>
      </div>
  );
};

PostsListItem.propTypes = {
  post: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

export default PostsListItem;
