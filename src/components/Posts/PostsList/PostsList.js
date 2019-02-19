import React from 'react';
import PropTypes from 'prop-types';
import PostsListItemContainer from '../../Containers/Posts/PostListItemContainer';

const PostsList = ({posts}) => {
  return (
      <div className="post-list">
        {posts.map(post => (
            <PostsListItemContainer
                post={post}
                key={post['.key']}
            />
        ))}
      </div>
  );
};

PostsList.propsTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
