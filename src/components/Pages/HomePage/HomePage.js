import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import ForumsList from '../../Forums/ForumsList';

class HomePage extends Component {
  render() {
    const {categories, forums} = this.props;

    return (
        <Fragment>
          {Object.values(categories).map(category => {
            return (
                <ForumsList
                    key={category['.key']}
                    categories={categories}
                    forums={forums}
                    categoryId={category['.key']}
                />
            );
          })}
        </Fragment>
    );
  }
}

HomePage.propTypes = {
  categories: PropTypes.object.isRequired,
  forums: PropTypes.object.isRequired
};

export default HomePage;
