import React from 'react';
import App from './App';
import { NeptuneProvider } from '@neptune/core';

export const wrapPageElement = props => (
  <NeptuneProvider>
    <App {...props} />
  </NeptuneProvider>
);
