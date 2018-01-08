'use strict';

console.log('app.js is running!');

var count = 0;

var addOne = function addOne() {
  count++;
  console.log('add 1 - count: ' + count);
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  console.log('minus 1 - count: ' + count);
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  console.log('reset - count: ' + count);
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var template2 = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne, className: 'btn btn-primary' },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne, className: 'btn btn-warning' },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset, className: 'btn btn-light' },
      'reset'
    )
  );

  ReactDOM.render(template2, appRoot);
};

renderCounterApp();
