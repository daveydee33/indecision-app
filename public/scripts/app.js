'use strict';

console.log('app.js is running!');

// if statements
// ternary operators
// logical and operator (&&)

// only render subtitle if exists (using logical and operator)
// render new h3 tag - if options, otherwise "No options") (using ternary operator)

// basic template 1 - with constiables
var app = {
  title: 'Indecision App',
  // subtitle: 'Put your life in the hands of a computer',
  options: []
};

var user = {
  name: "Dave",
  age: 99,
  location: "Sydney",
  options: ["one", "two"]

  // Method 1 - IF statement
  // ES 5 way of doing things - before moving to Arrow functions
};function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

// Method 2 - IF statement
function getLocation2(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location 2: ',
      location
    );
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
  app.subtitle && React.createElement(
    'h3',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    'Name: ',
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.num
  ),
  React.createElement(
    'p',
    null,
    'Location 1: ',
    getLocation(user.location)
  ),
  getLocation2(user.location),
  React.createElement(
    'p',
    null,
    'Location 3: ',
    user.location ? user.location : "Unknown"
  ),
  React.createElement(
    'p',
    null,
    user.options ? "Here are your options: " : "No options"
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
