import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ThreadsList.css';

import ListTitle from '../../Shared/ListTitle';
import ThreadListItem from '../ThreadListItem';

class ThreadsList extends Component {
  render() {
    const {threads, users, posts} = this.props;

    return (
        <div className="thread-list push-top">
          <ListTitle title="Threads"/>
          {threads.map(thread => (
              <ThreadListItem
                thread={thread}
                key={thread['.key']}
                users={users}
                posts={posts}
              />
          ))}
        </div>
    );
  }
}

ThreadsList.propTypes = {
  threads: PropTypes.array.isRequired,
  users: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired
};

export default ThreadsList;
