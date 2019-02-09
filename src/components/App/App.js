import React, { Component, Fragment } from 'react';
import Header from "../Header";
import ForumStats from "../ForumStats";
import ErrorBoundary from "../ErrorBoundary";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Header />
        <ForumStats />
      </ErrorBoundary>
    );
  }
}

export default App;
