import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ForumsListContainer from '../../Containers/Forums/ForumsListContainer';

class HomePage extends Component {
  render() {
    const {categoriesIds} = this.props;

    return (
        <div className="container">
          <div className="col-full">
            {categoriesIds.map(categoryId => {
              return (
                  <ForumsListContainer
                      key={categoryId}
                      categoryId={categoryId}
                  />
              );
            })}
          </div>
        </div>
    );
  }
}

HomePage.propTypes = {
  categoriesIds: PropTypes.array.isRequired,
};

export default HomePage;
