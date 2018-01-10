// @flow

import './styles.css';

import * as React from 'react';

class App extends React.Component {
  state = {
    name: 'frontend-boilerplate'
  };

  render() {
    return (
      <div styleName="App">
        <h1>Welcome to {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
