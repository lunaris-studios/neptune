import * as React from "react";

import { addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { default as centered } from '@storybook/addon-centered/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import { NeptuneProvider } from "../src/bin/_neptune-provider";
import results from "../coverage/.jest-test-results.json";

addDecorator((story) => <NeptuneProvider>{story()}</NeptuneProvider>);

addDecorator(withA11y);

addDecorator((...args) => {
  const params = (new URL(document.location)).searchParams;
  const isInDockView = params.get('viewMode') === 'docs';

  if (isInDockView) {
    return args[0]();
  }

  return centered(...args);
});

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

addDecorator(withKnobs);

addParameters({
	backgrounds: [
		{ name: "light", value: "#ffffff", default: true },
		{ name: "dark", value: "#aaaaaa" },
	],
});

addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
	},
});

addDecorator(
	withTests({
		results,
		filesExt: '((\\.specs?)|(\\.tests?))?(\\.ts)?$',
	}),
);

const loadStories = () => {
  return [
    require.context('../docs', true, /intro.story.mdx/),
    require.context('../src', true, /\.story\.(js|jsx|ts|tsx|mdx)$/)
  ];
}

configure(loadStories(), module);
