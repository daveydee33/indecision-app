console.log('app.js is running!');

// JSX - JS XML
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
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);