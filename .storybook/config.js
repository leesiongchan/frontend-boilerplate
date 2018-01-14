// @flow

import * as React from 'react';
import { addDecorator, configure } from '@storybook/react';

const req = require.context('../stories', true, /\.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
