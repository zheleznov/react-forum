import React from 'react';
import PropTypes from 'prop-types';
import './ForumListItem.css';

import ForumPreview from '../ForumPreview';
import ForumThreadsCounter from '../ForumThreadsCounter';
import ForumLastThread from '../ForumLastThread';

const ForumListItem = ({forum}) => {

  return (
      <div className="forum-listing">
        <ForumPreview
            url={`/forum/${forum['.key']}`}
            title={forum.name}
            description={forum.description}
            subForums={forum.subForums}
        />
        <ForumThreadsCounter
            count={(forum.threads &&
                Object.keys(forum.threads).length) || 0}
        />
        <ForumLastThread/>
      </div>
  );
};

ForumListItem.propTypes = {
  forum: PropTypes.object.isRequired,
};

export default ForumListItem;
