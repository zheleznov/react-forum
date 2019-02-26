import React from 'react';
import PropTypes from 'prop-types';
import PostUserInfo from '../PostUserInfo';
import PostContent from '../PostContent';

const PostsListItem = ({post, users, posts}) => {
  const currentPost = posts[post];
  const {userId} = currentPost;
  const postUser = users[userId];

  return (
      <div className="post">
        <PostUserInfo user={postUser}/>
        <PostContent post={currentPost}/>
      </div>
  );

};

PostsListItem.propTypes = {
  post: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
};

export default PostsListItem;
