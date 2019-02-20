import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import ForumsListContainer from '../../Containers/Forums/ForumsListContainer';
import ForumsStatsContainer from '../../Containers/Forums/ForumStatsContainer';

class HomePage extends Component {
  render() {
    const {categoriesIds} = this.props;

    return (
        <Fragment>
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
          <ForumsStatsContainer/>
        </Fragment>
    );
  }
}

HomePage.propTypes = {
  categoriesIds: PropTypes.array.isRequired,
};

export default HomePage;
