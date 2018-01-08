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
  options: [],
}

var user = {
  name: "Dave",
  age: 99,
  location: "Sydney"
}

// ES 5 way of doing things - before moving to Arrow functions
function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';    
  }
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Name: {user.name}</li>
      <li>Age: {user.num}</li>
      <li>Location: {getLocation(user.location)}</li>
    </ol>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);