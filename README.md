# react-bootstrap-buttons [![build status](https://travis-ci.org/cheton/react-bootstrap-buttons.svg?branch=master)](https://travis-ci.org/cheton/react-bootstrap-buttons) [![Coverage Status](https://coveralls.io/repos/github/cheton/react-bootstrap-buttons/badge.svg?branch=master)](https://coveralls.io/github/cheton/react-bootstrap-buttons?branch=master)

[![NPM](https://nodei.co/npm/react-bootstrap-buttons.png?downloads=true&stars=true)](https://nodei.co/npm/react-bootstrap-buttons/)

React Buttons component.

Demo: https://cheton.github.io/react-bootstrap-buttons

## Installation

1. Install [react-bootstrap-buttons](https://github.com/cheton/react-bootstrap-buttons):

  ```
  npm install --save react-bootstrap-buttons
  ```

2. Import `react-bootstrap-buttons` and its styles in your application as follows:

  ```js
  import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';

  // Be sure to include styles at some point, probably during your bootstraping
  import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
  ```

## Recommended Setup

Create a `Buttons` component inside your common components directory:
```
components/
  Buttons/
    index.js
```

**components/Buttons/index.js**
```js
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';

export { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap-buttons';
```

Then, import `Button` component in your code:
```js
import { Button } from 'app/components/Buttons';
```

## API

### Properties

#### Button

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
tag | Function or String | 'button' |
type | One of:<br/>'button'<br/>'reset'<br/>'submit' | 'button' |
btnSize | One of:<br/>'lg'<br/>'md'<br/>'sm'<br/>'xs'<br/>'large'<br/>'medium'<br/>'small'<br/>'extra-small' | 'md' |
btnStyle | One of:<br/>'default'<br/>'primary'<br/>'secondary'<br/>'danger'<br/>'warning'<br/>'info'<br/>'success'<br/>'light'<br/>'dark'<br/>'link'<br/> | 'default' |
outline | Boolean | false |
active | Boolean | false |
hover | Boolean | false |
focus | Boolean | flase |
disabled | Boolean | flase |
block | Boolean | false |

#### ButtonGroup

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
btnSize | One of:<br/>'lg'<br/>'md'<br/>'sm'<br/>'xs'<br/>'large'<br/>'medium'<br/>'small'<br/>'extra-small' | |
btnStyle | One of:<br/>'default'<br/>'primary'<br/>'secondary'<br/>'danger'<br/>'warning'<br/>'info'<br/>'success'<br/>'light'<br/>'dark'<br/>'link'<br/> | 'default' |
vertical | Boolean | false |

#### ButtonToolbar

Name | Type | Default | Description 
:--- | :--- | :------ | :----------

## License

MIT
