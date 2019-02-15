import React from 'react';
import {Link} from "react-router-dom";

const ForumLastPost = (props) => {
  debugger;
  const {posts, users, lastPostId = '', threads} = props;
  const lastPost = lastPostId && posts[lastPostId];
  const lastPostUser = lastPost && users[lastPost['userId']];
  const thread = threads[lastPost['threadId']];

  if(lastPost) {
    return (
      <div className="last-thread">
        <img className="avatar"
             src={lastPostUser.avatar}
             alt=""/>
        <div className="last-thread-details">
          <Link to={`/thread/${lastPost['threadId']}`}>{thread.title}</Link>
          <p className="text-xsmall">By <Link to={`/profile/${lastPostUser['.key']}`}>{lastPostUser.name}</Link>, {lastPost.publishedAt}</p>
        </div>
      </div>
    );
  } else {
    return <div className="last-thread"></div>;
  }
};

export default ForumLastPost;
