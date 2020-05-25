import React from 'react';
import App from './App';
import { NucleusProvider } from '@nucleus/core';

export const wrapPageElement = props => (
  <NucleusProvider>
    <App {...props} />
  </NucleusProvider>
);
