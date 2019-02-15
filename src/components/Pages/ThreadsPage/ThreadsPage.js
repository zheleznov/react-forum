import React, {Fragment} from 'react';
import {withRouter} from "react-router-dom";
import ThreadsList from "../../Threads/ThreadsList";
import ListTitle from "../../Shared/ListTitle";
import ForumListItem from "../../Forums/ForumListItem";
import Breadcrumbs from "../../Shared/Breadcrumbs/Breadcrumbs";

function ThreadsPage({categories, forums, match, threads, users, posts}) {
  const forumId = match.params.forumId;
  const currentForum = forums[forumId];
  const forumThreads = Object.values(threads).filter(thread => {
    return thread['forumId'] === forumId;
  });
  let subForums = [];

  if (currentForum.forums) {
    subForums = Object.keys(currentForum.forums).map(subForumId => {
      return forums[subForumId];
    });
  }

  return (
    <Fragment>
      <Breadcrumbs />
      <div className="forum-header">
        <div className="forum-details">
          <h1>{currentForum.name}</h1>
          <p className="text-lead">{currentForum.description}</p>
        </div>
        <a href="new-thread.html" className="btn-green btn-small">Start a thread</a>
      </div>
      {subForums.map(subForum => (
        <div className="forum-list" key={subForum['.key']}>
          <ListTitle title={subForum.name}/>
          <ForumListItem forum={subForum} classes="forum-name" users={users} posts={posts} threads={threads}/>
        </div>
      ))}

      <ThreadsList threads={forumThreads} users={users} posts={posts}/>
    </Fragment>
  );
}

export default withRouter(ThreadsPage);
