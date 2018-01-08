"use strict";

console.log('app.js is running!');

// JSX - JS XML

// basic template 1
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Heading"
  ),
  React.createElement(
    "p",
    null,
    "With some paragraph"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "One"
    ),
    React.createElement(
      "li",
      null,
      "Two"
    )
  )
);

// basic template 2 - with variables
var heading = "Something";
var dude = {
  name: "Dave",
  num: 99,
  city: "Sydney"
};

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    heading
  ),
  React.createElement(
    "p",
    null,
    "Details"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Name: ",
      dude.name
    ),
    React.createElement(
      "li",
      null,
      "Num: ",
      dude.num
    ),
    React.createElement(
      "li",
      null,
      "City: ",
      dude.city
    )
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
