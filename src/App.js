import React, { Component } from 'react';
import PostList from './components/PostList'


class App extends Component {
  render() {
    return (
      <div className="App ui container">
        <PostList />
      </div>
    );
  }
}

export default App;
