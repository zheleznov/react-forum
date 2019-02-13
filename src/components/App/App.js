import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../../store/store';
import actions from '../../store/actions';

import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';
import ForumsListContainer from '../../containers/ForumsListContainer';
import ForumListingContainer from '../../containers/ForumListingContainer';
import PageNotFound from '../PageNotFound';
import PageContent from '../PageContent';

// import '../../services/data-service';


class App extends Component {
  componentDidMount() {
    actions.getData();
  }

  render() {
    return (
        <Provider store={store}>
          <ErrorBoundary>
            <Router>
              <Fragment>
                <Header/>
                <Switch>
                  <PageContent>
                    <Route path="/" exact component={ForumsListContainer}/>
                    <Route path="/category/:categoryId" component={ForumListingContainer}/>
                  </PageContent>
                  <Route component={PageNotFound}/>
                </Switch>
              </Fragment>
            </Router>
          </ErrorBoundary>
        </Provider>
    );
  }
}

export default App;
