import React, { Component, Fragment } from 'react';
import Header from "../Header";
import ForumStats from "../ForumStats";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <ForumStats />
      </Fragment>
    );
  }
}

export default App;
