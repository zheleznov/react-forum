import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import firebase from 'firebase/app';
import {Provider} from 'react-redux';
import store from '../../store/store';
import {dataActions} from '../../store/actions';


import Header from '../Header';
import ErrorBoundary from '../ErrorBoundary';
import HomePageContainer from '../Containers/Pages/HomePageContainer';
import CategoryForumsPageContainer from '../../components/Containers/Pages/CategorieForumsPageContainer';
import ThreadsPageContainer from '../Containers/Pages/ThreadsPageContainer';
import PostsPageContainer from '../../components/Containers/Pages/PostsPageContainer';
import NewThreadPage from '../../components/Pages/NewThreadPage';
import RegisterPage from '../Pages/RegisterPage';
import PageNotFound from '../../components/Pages/PageNotFound';

var config = {
  apiKey: "AIzaSyDIIBhOVzPInjJZOggPsRESJ_U7MS30VAI",
  authDomain: "react-forum-2f18e.firebaseapp.com",
  databaseURL: "https://react-forum-2f18e.firebaseio.com",
  projectId: "react-forum-2f18e",
  storageBucket: "react-forum-2f18e.appspot.com",
  messagingSenderId: "623519307159"
};

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config);
    dataActions.getAllItemsFromCollection();
  }

  render() {
    return (
        <Provider store={store}>
          <ErrorBoundary>
            <Router>
              <Fragment>
                <Header/>
                <Switch>
                  <Fragment>
                    <Route path="/" exact component={HomePageContainer}/>
                    <Route path="/category/:categoryId" exact component={CategoryForumsPageContainer}/>
                    <Route path="/forum/:forumId" component={ThreadsPageContainer}/>
                    <Route path="/thread/:threadId" component={PostsPageContainer}/>
                    <Route path="/new-thread" component={NewThreadPage}/>
                    <Route path="/registration" component={RegisterPage}/>
                  </Fragment>
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
