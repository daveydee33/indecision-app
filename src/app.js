console.log('app.js is running!');

// JSX - JS XML

// basic template 1
var template = (
  <div>
    <h1>Heading</h1>
    <p>With some paragraph</p>
    <ol>
      <li>One</li>
      <li>Two</li>
    </ol>
  </div>
);

// basic template 2 - with variables
var heading = "Something";
var dude = {
  name: "Dave",
  num: 99,
  city: "Sydney"
}

var template2 = (
  <div>
    <h1>{heading}</h1>
    <p>Details</p>
    <ol>
      <li>Name: {dude.name}</li>
      <li>Num: {dude.num}</li>
      <li>City: {dude.city}</li>
    </ol>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);