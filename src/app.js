console.log('app.js is running!');

// if statements
// ternary operators
// logical and operator (&&)

// only render subtitle if exists (using logical and operator)
// render new h3 tag - if options, otherwise "No options") (using ternary operator)

// basic template 1 - with constiables
const app = {
  title: 'Indecision App',
  // subtitle: 'Put your life in the hands of a computer',
  options: [],
}

const user = {
  name: "Dave",
  age: 99,
  location: "Sydney",
  options: ["one", "two"]
}

// Method 1 - IF statement
// ES 5 way of doing things - before moving to Arrow functions
function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

// Method 2 - IF statement
function getLocation2(location) {
  if (location) {
    return <p>Location 2: {location}</p>;
  }
}

const template = (
  <div>
  <h1>{app.title}</h1>
  {app.subtitle && <h3>{app.subtitle}</h3>}
  <p>Name: {user.name}</p>
  <p>Age: {user.num}</p>

  <p>Location 1: {getLocation(user.location)}</p>
  
  {getLocation2(user.location)}

  <p>Location 3: {user.location ? user.location : "Unknown"}</p>

  <p>{user.options ? "Here are your options: " : "No options"}</p>
  </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);