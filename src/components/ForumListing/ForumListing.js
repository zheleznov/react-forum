import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ForumHeader from '../ForumHeader';
import ForumThreadsCounter from '../ForumThreadsCounter';
import ForumLastThread from '../ForumLastThread';
import ListTitle from '../ListTitle';

class ForumListing extends React.Component {
  render() {
    const {forums, match, forumsIds, categories} = this.props;
    const categoryId = this.props.categoryId ||
        (match && match.params.categoryId);
    const categoryName = categories[categoryId].name;
    let forumsToRender = null;

    if (forumsIds) {
      forumsToRender = forums.filter(forum => {
        return Object.keys(forumsIds).includes(forum['.key']);
      });
    } else {
      forumsToRender = forums.filter(forum => {
        return Object.keys(categories[categoryId].forums)
            .includes(forum['.key']);
      });
    }

    return (
        <div className="forum-list">
          <ListTitle
              title={categoryName}
              url={`/category/${categoryId}`}
          />

          {forumsToRender.map(forum => (
              <div className="forum-listing" key={forum['.key']}>
                <ForumHeader
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
          ))}
        </div>
    );
  }
}

ForumListing.propTypes = {
  categories: PropTypes.object.isRequired,
  forums: PropTypes.array.isRequired,
  match: PropTypes.object,
  forumsIds: PropTypes.object,
  categoryId: PropTypes.string,
};

// TODO: think how to move mapState to container

const mapStateToProps = ({data}) => {
  const categories = data['categories'];

  const forums = Object.keys(data['forums']).map(key => {
    const forum = data['forums'][key];

    if (forum.forums) {
      forum.subForums = Object.keys(forum.forums).map(key => {
        return data['forums'][key];
      });
    }

    return forum;
  });

  return {
    forums,
    categories,
  };
};

export default connect(mapStateToProps)(ForumListing);
