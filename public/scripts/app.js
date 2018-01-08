'use strict';

console.log('app.js is running!');

// JSX - JS XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Heading'
  ),
  React.createElement(
    'p',
    null,
    'With some paragraph'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'One'
    ),
    React.createElement(
      'li',
      null,
      'Two'
    )
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
