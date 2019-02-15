import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import ForumsList from '../../Forums/ForumsList';

class HomePage extends Component {
  render() {
    const {categories, forums, posts, users, threads} = this.props;

    return (
        <Fragment>
          {Object.values(categories).map(category => {
            return (
                <ForumsList
                    key={category['.key']}
                    categories={categories}
                    forums={forums}
                    categoryId={category['.key']}
                    posts={posts}
                    users={users}
                    threads={threads}
                />
            );
          })}
        </Fragment>
    );
  }
}

HomePage.propTypes = {
  categories: PropTypes.object.isRequired,
  forums: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

export default HomePage;
