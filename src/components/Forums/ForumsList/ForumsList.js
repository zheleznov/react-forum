import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import './ForumsList.css';

import ListTitle from '../../Shared/ListTitle';
import ForumListItem from '../ForumListItem';

class ForumsList extends React.Component {
  render() {
    const {forums, match, categories, categoryId, users, posts, threads} = this.props;
    const id = categoryId || (match && match.params.categoryId);
    const categoryName = categories[id].name;

    const forumsToRender = Object.values(forums).filter(forum => {
      if (forum['categoryId'] === id && forum.forums) {
        forum.subForums = Object.keys(forum.forums)
            .map(subForumId => forums[subForumId]);
      }
      return forum['categoryId'] === id;
    });

    return (
        <div className="forum-list">
          <ListTitle
              title={categoryName}
              url={`/category/${id}`}
          />

          {forumsToRender.map(forum => (
              <ForumListItem
                  key={forum['.key']}
                  forum={forum}
                  forums={forums}
                  posts={posts}
                  users={users}
                  threads={threads}
              />
          ))}
        </div>
    );
  }
}

ForumsList.propTypes = {
  categories: PropTypes.object.isRequired,
  forums: PropTypes.object.isRequired,
  match: PropTypes.object,
  categoryId: PropTypes.string,
  posts: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

export default withRouter(ForumsList);
