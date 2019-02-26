import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './ForumsList.css';

import ListTitle from '../../Shared/ListTitle';
import ForumListItem from '../ForumListItem';

class ForumsList extends React.Component {
  render() {
    const {forums, match, categories, categoryId} = this.props;
    const id = categoryId || (match && match.params.categoryId);
    const categoryName = categories[id].name;

    // get forums to render
    const forumsToRender = Object.values(forums).filter(forum => {
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
                  key={forum['_key']}
                  forum={forum}
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
};

export default withRouter(ForumsList);
