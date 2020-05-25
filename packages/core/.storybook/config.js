import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { NucleusProvider } from '../src/NucleusProvider';
import { Box } from '../src';

function ThemeComponent({ children }) {
  return (
    <NucleusProvider>
      <Box p={3}>{children}</Box>
    </NucleusProvider>
  );
}

addDecorator((story, context) => <ThemeComponent>{story()}</ThemeComponent>);

configure(loadStories, module);

function loadStories() {
  const req = require.context('../src', true, /\.story\.(js|tsx)$/);
  req.keys().forEach(filename => req(filename));
}
