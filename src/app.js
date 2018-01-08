console.log('app.js is running!');

let count = 0;

const addOne = () => {
  count++;
  console.log(`add 1 - count: ${count}`);
};

const minusOne = () => {
  count--;
  console.log(`minus 1 - count: ${count}`);
}

const reset = () => {
  count = 0;
  console.log(`reset - count: ${count}`)
}

const template2 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne} className="btn btn-primary">+1</button>
    <button onClick={minusOne} className="btn btn-warning">-1</button>
    <button onClick={reset} className="btn btn-light">reset</button>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);