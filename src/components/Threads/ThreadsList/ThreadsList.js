import React from 'react';
import PropTypes from 'prop-types';
import './ThreadsList.css';

import ListTitle from '../../Shared/ListTitle';
import ThreadListItemContainer from '../../Containers/Threads/ThreadListItemContainer';

const ThreadsList = ({forumThreads}) => {
  return (
      <div className="thread-list push-top">

        <ListTitle title="Threads"/>

        {forumThreads.map(thread => (
            <ThreadListItemContainer
                thread={thread}
                key={thread['.key']}
            />
        ))}
      </div>
  );
};

ThreadsList.propTypes = {
  forumThreads: PropTypes.array.isRequired,
};

export default ThreadsList;
