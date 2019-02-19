import React from 'react';
import PropTypes from 'prop-types';
import './ForumListItem.css';

import ForumPreview from '../ForumPreview';
import ForumThreadsCounter from '../ForumThreadsCounter';
import ForumLastPostContainer from '../../Containers/Forums/ForumLastPostContainer';

const ForumListItem = ({forum, classes}) => {
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
        <ForumLastPostContainer lastPostId={forum['lastPostId']}/>
      </div>
  );
};

ForumListItem.propTypes = {
  forum: PropTypes.object.isRequired,
  classes: PropTypes.object
};

export default ForumListItem;
