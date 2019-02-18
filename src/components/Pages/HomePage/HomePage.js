import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import ForumsListContainer from '../../Containers/Forums/ForumsListContainer';

class HomePage extends Component {
  render() {
    const {categoriesIds} = this.props;

    return (
        <Fragment>
          {categoriesIds.map(categoryId => {
            return (
                <ForumsListContainer
                    key={categoryId}
                    categoryId={categoryId}
                />
            );
          })}
        </Fragment>
    );
  }
}

HomePage.propTypes = {
  categoriesIds: PropTypes.array.isRequired,
};

export default HomePage;
