console.log('app.js is running!');

let count = 0;

const addOne = () => {
  count++;
  console.log(`add 1 - count: ${count}`);
  renderCounterApp();
};

const minusOne = () => {
  count--;
  console.log(`minus 1 - count: ${count}`);
  renderCounterApp();
}

const reset = () => {
  count = 0;
  console.log(`reset - count: ${count}`)
  renderCounterApp();
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne} className="btn btn-primary">+1</button>
      <button onClick={minusOne} className="btn btn-warning">-1</button>
      <button onClick={reset} className="btn btn-light">reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
}

renderCounterApp();
