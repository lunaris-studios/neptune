> WIP

# Nucleus Icons

```sh
yarn add @nucleus/icons
```

### Install it

Nucleus Icons is currently under development, but if you'd like to use it anyway:

```js
# npm
npm install @nucleus/icons
```

```js
# yarn
yarn add @nucleus/icons
```

### Features

- Typescript support


### Use it

Import style functions:

```js
import styled from 'styled-components';
import { margin, backgroundColor, compose } from '@nucleus/icons';

const styleProps = compose(
  margin,
  backgroundColor
);
const Box = styled('div')(styleProps);

const App = () => (
  <Box my={4} bg="blue">
    Hey there 👋
  </Box>
);
```

With Typescript:

```js
import styled from 'styled-components';
import {
  margin,
  MarginProps,
  backgroundColor,
  BackgroundColorProps,
  compose,
} from '@nucleus/icons';

const styleProps = compose(
  margin,
  backgroundColor
);
type BoxProps = MarginProps & BackgroundColorProps;
const Box = styled('div') < BoxProps > styleProps;

const App = () => (
  <Box my={4} bg="blue">
    Hey there 👋
  </Box>
);
```

### Docs

Proper docs coming soon.

---

### License

MIT © [Lunaris Studios](https://lunaris.io)
