import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './ForumsList.css';

import ForumListing from '../ForumListing';

class ForumsList extends Component {
  render() {
    return (
        <Fragment>
          {this.props.categories.map(category => {
            return (
                <ForumListing
                    key={category['.key']}
                    forumsIds={category['forums']}
                    categoryId={category['.key']}
                />
            );
          })}
        </Fragment>
    );
  }
}

ForumsList.propTypes = {
  categories: PropTypes.array.isRequired
};

export default ForumsList;
