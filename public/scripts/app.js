"use strict";

console.log('app.js is running!');

// basic template 1 - with variables
var heading = "Something";
var dude = {
  name: "Dave",
  num: 99,
  city: "Sydney"
};

var template = React.createElement(
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

ReactDOM.render(template, appRoot);
