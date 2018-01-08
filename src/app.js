console.log('app.js is running!');

// basic template 1 - with variables
var heading = "Something";
var dude = {
  name: "Dave",
  num: 99,
  city: "Sydney"
}

var template = (
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

ReactDOM.render(template, appRoot);