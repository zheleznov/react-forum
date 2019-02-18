import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../../store/store';
import actions from '../../store/actions';

import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';
import HomePageContainer from '../Containers/Pages/HomePageContainer';
import CategoryForumsPageContainer from '../../components/Containers/Pages/CategorieForumsPageContainer';
import ThreadsPageContainer from '../Containers/Pages/ThreadsPageContainer';
import NewThreadPage from '../../components/Pages/NewThreadPage';
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
                    <Route path="/" exact component={HomePageContainer}/>
                    <Route path="/category/:categoryId" exact component={CategoryForumsPageContainer}/>
                    <Route path="/forum/:forumId" component={ThreadsPageContainer}/>
                    <Route path="/new-thread" component={NewThreadPage}/>
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
