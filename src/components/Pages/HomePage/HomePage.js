import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import ForumsListContainer from '../../Containers/Forums/ForumsListContainer';
import ForumsStatsContainer from '../../Containers/Forums/ForumStatsContainer';
import Spinner from '../../Shared/Spinner';
import Layout from '../../Shared/Layout';

class HomePage extends Component {
  render() {
    const {categories} = this.props;

    if (categories) {
      return (
          <Fragment>
            <div className="container">
              <div className="col-full">
                {Object.keys(categories).map(categoryId => {
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
    } else {
      return (
          <Layout>
            <Spinner/>
          </Layout>
      )
    }
  }
}

HomePage.propTypes = {
  categories: PropTypes.object,
};

export default HomePage;
