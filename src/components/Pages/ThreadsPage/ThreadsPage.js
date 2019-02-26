import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import ThreadsList from '../../Threads/ThreadsList';
import ListTitle from '../../Shared/ListTitle';
import ForumListItem from '../../Forums/ForumListItem';
import Breadcrumbs from '../../Shared/Breadcrumbs/Breadcrumbs';
import ThreadsHeader from '../../Threads/ThreadsHeader';
import ForumsStatsContainer from '../../Containers/Forums/ForumStatsContainer';
import Spinner from '../../Shared/Spinner';
import Layout from '../HomePage/HomePage';

function ThreadsPage({categories, forums, match, threads}) {
  const forumId = match.params.forumId;

  if (categories) {
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
          <div className="container">
            <div className="col-full">
              <Breadcrumbs/>

              <ThreadsHeader
                  name={currentForum.name}
                  description={currentForum.description}
              />

              {subForums.map(subForum => (
                  <div className="forum-list" key={subForum['_key']}>
                    <ListTitle title={subForum.name}/>

                    <ForumListItem
                        forum={subForum}
                        classes="forum-name"
                    />
                  </div>
              ))}

              <ThreadsList forumThreads={forumThreads}/>
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
}

export default withRouter(ThreadsPage);
