> WIP

# Neptune Icons

```sh
yarn add @neptune/icons
```

### Install it

Neptune Icons is currently under development, but if you'd like to use it anyway:

```js
# npm
npm install @neptune/icons
```

```js
# yarn
yarn add @neptune/icons
```

### Features

- Typescript support


### Use it

Import style functions:

```js
import styled from 'styled-components';
import { margin, backgroundColor, compose } from '@neptune/icons';

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
} from '@neptune/icons';

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
