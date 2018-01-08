'use strict';

console.log('app.js is running!');

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No ptions"

// basic template 1 - with variables
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var user = {
  name: "Dave",
  age: 99,
  location: "Sydney"

  // ES 5 way of doing things - before moving to Arrow functions
};function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Name: ',
      user.name
    ),
    React.createElement(
      'li',
      null,
      'Age: ',
      user.num
    ),
    React.createElement(
      'li',
      null,
      'Location: ',
      getLocation(user.location)
    )
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
