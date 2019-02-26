import React, {Fragment} from 'react';
import Breadcrumbs from '../../Shared/Breadcrumbs/Breadcrumbs';
import PostsList from '../../Posts/PostsList';
import {Link} from 'react-router-dom';
import ForumsStatsContainer from '../../Containers/Forums/ForumStatsContainer';
import Spinner from '../../Shared/Spinner';
import Layout from '../HomePage/HomePage';

const PostsPage = ({match, threads, users, posts}) => {
  const threadId = match.params.threadId;

  if (threads) {
    const currentThread = threads[threadId];
    const replyCount = Object.keys(currentThread['posts']).length;
    const contributorsCount = Object.keys(currentThread['contributors']).length;
    const createdTime = currentThread['publishedAt'];
    const userId = currentThread['userId'];
    const user = users[userId];
    const postsIds = Object.keys(currentThread['posts']);

    const threadPosts = Object.keys(posts).filter(post => {
      return postsIds.includes(post);
    });

    return (
        <Fragment>
          <div className="container">
            <div className="col-large">
              <Breadcrumbs/>
              <h1>{currentThread.title}</h1>
              <p>
                By <Link to={`/profile/${userId}`}
                         className="link-unstyled">{user.name}</Link>, {createdTime} hours
                ago.
                <span
                    className="hide-mobile text-faded text-small">{replyCount} replies by {contributorsCount} contributors</span>
              </p>

              <PostsList posts={threadPosts}/>
            </div>
          </div>

          <ForumsStatsContainer/>
        </Fragment>
    );
  } else {
    return (
        <Layout>
          <Spinner/>
        </Layout>
    )
  }
};

export default PostsPage;
