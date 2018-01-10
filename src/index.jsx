// @flow

import * as React from 'react';
import { hydrate, render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

const rootEl = document.getElementById('root');

const load = () => {
  if (rootEl.hasChildNodes()) {
    hydrate(
      <AppContainer>
        <App />
      </AppContainer>,
      rootEl
    );
  } else {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      rootEl
    );
  }
};

// This is needed for Hot Module Replacement.
if (module.hot) {
  module.hot.accept('./App', load);
}

load(App);
