import React from 'react';
import PropTypes from 'prop-types';
import './ForumListItem.css';

import ForumPreview from '../ForumPreview';
import ForumThreadsCounter from '../ForumThreadsCounter';
import ForumLastPost from '../ForumLastPost';

const ForumListItem = ({forum, classes, posts, users, threads}) => {
  return (
      <div className="forum-listing">
        <ForumPreview
            url={`/forum/${forum['.key']}`}
            title={forum.name}
            description={forum.description}
            subForums={forum.subForums}
            classes={classes}
        />
        <ForumThreadsCounter
            count={(forum.threads &&
                Object.keys(forum.threads).length) || 0}
        />
        <ForumLastPost lastPostId={forum['lastPostId']} posts={posts} users={users} threads={threads}/>
      </div>
  );
};

ForumListItem.propTypes = {
  forum: PropTypes.object.isRequired,
};

export default ForumListItem;
