Following a React cource guide: https://www.udemy.com/react-2nd-edition/learn/v4/content

Taking my learning notes along the way.

# File locations

This file:
/DB/Dropbox/Projects/react_notes.md

Projects folder:
/DB/Dropbox/Projects/react-course-projects

# NPM vs Yarn
NPM is the package manager from Node.  
Yarn is from Facebook.

Yarn is faster can can install packages offline, assuming we have downloaded a package before.  Yarn will copy it locally.

Looks like I'll be switching to Yarn for now.

# Installing Yarn

I guess the NPM install of yarn is deprecated.  Insatlled it with brew as suggested on Yarn website.

# live-server

I was using HTTPSter before for a quick simple webserver, but live-server seems better.  It will live reload my page when I save a file.

# Ract basics

Easiest way to start, is to add 2 script tags at the bottom of an HTML doc at end of the <body> tag.

Then I can access these objects in chrome developer tools.

```
React
ReactDOM
```

 # JSX is Javascript XML

 It's a language extension provided by React.

 It's like Less/Sass for CSS.  They're not part of the language but they are extensions of the language.

 JSX allows us to write HTML/XML in JS, something like:

 ```javascript
 const template = <p>Something here</p>;
```

# ReactDOM

In the dev tools look at the `React` object.  It has one function that we will to start.

```javascript
// ReactDOM.render(<JSX to render>, <id>)
```

To insert a template, and where we will render it.

eg.

```javascript
const template = <p>Something here...</p>

const myParagraph = document.getElementById('myParagraph');

ReactDOM.render(myTemplate, myParagraph);
```

# Babel - for transpiling

But that above code won't work without transpiling down to ES5 (from ES6/ES7)

Babel is going to transpile something like:

```javascript
var template = <h1 id="myH1">This is a test</h1>;
```

TO

```javascript
var template = React.createElement(
  "h1",
  { id: "myH1" },
  "This is a test"
);
```

# Installing Babel CLI globally

```
yarn global add babel-cli@6.24.1
```

First we're going to install Babel and then we are going to install these 2 presets which give us everything we need to write in most recent JS and with JSX.

* env - const, arrow functions, spread operators, etc.
* react

See:
[Babel presets](https://babeljs.io/docs/plugins/#presets-official-presets)

# Starting our Project with Yarn init

Create the `package.json` file with.

```
yarn init
```

This is almost the same as `npm init` and it will start our project using yarn to manage dependencies.

# And installing those Babel presets locally to this project.

I'm going to use the specific versions this this project.

* Babel preset: react (`babel-preset-react`)
* Babel preset: env (`babel-preset-env`)

```
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
```

# Creating some project files and folder structure.

`src` -- directory where all the React code will go.
`src/app.js` --> This is our React code starting point.

```javascript
console.log('app.js is running!');

// JSX - JS XML
var template = <p>This is JSX from app.js!</p>
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
```

`public/scripts` --> where the Babel compiled code will go.
`public/scripts/app.js` --> the transpiled version.  This is the out directory for the Balbel generated code.  So we'll never edit these directly.  
`public/index.html` --> This is our starting HTML file where we'll render the React app.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>indecision-app</title>
</head>

<body>
  <div id="app">This will get replaced when react loads...</div>

  <script src="https://unpkg.com/react@15/dist/react.js"></script>
  <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
  <script src="scripts/app.js"></script>

</body>

</html>
```

# Running Babel from command line to transpile our code that `public/scripts` out file.

This is using that Babel CLI we installed globally with Yarn.
And we are specifying the 2 presets we need - **env** and **react** which we noted before.

```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
```

We can add the `--watch` argument so Babel will auto regenerate the output file anytime we save our input file.

# Use live-server along with Babel --watch so we can see our updates as we code and save them!

# JSX Expressions

`app.js`

```javascript
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
```

# Conditional Rendering in JSX

* if statements
* ternary operators
* logical and operator

```javascript

console.log('app.js is running!');

// if statements
// ternary operators
// logical and operator (&&)

// only render subtitle if exists (using logical and operator)
// render new h3 tag - if options, otherwise "No options") (using ternary operator)

// basic template 1 - with variables
var app = {
  title: 'Indecision App',
  // subtitle: 'Put your life in the hands of a computer',
  options: [],
}

var user = {
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

var template = (
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
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

```

## Why use the **ternary operator** or **logical and** ?

> The **ternary operator (<expression> ? <if true> : <else>)** is great when we want to do one of two things.
> The **logical and perator (&&)** is great if only want to do something if an expression is true.  (no else needed)

# Using let and const instead of var

* don't use var anymore - use const and let
* default to using const, use let when we need to.

Const, you can't change a string.  If we need a string to change, we can use let.

Difference is scoping between var and const/let.

But const, let, and var all have **funtion level scoping**.  They are the same there. .  If we define the variable in the function, we can't reference it outside the function.

But, the difference is in **block level scoping** where a function is defined in a block like an if statement for example.  

with let and const - if they are defined within an if statement for example, they will _not_ be accessible outside like a var would be.

# Arrow functions

Little bit shorter, but also a lot cleaner for 1 liners.

```javascript
// old style function
const square1 = function (x) {
  return x * x;
}

// or...

// old style function with a name
function square2 (x) {
  return x * x;
}


// arrow functions are always anonymous, so if we want to define it and call it later, we assign it to a variable like:
// arrow function
const squareArrow = (x) => {
  return x * x;
}

// arrow function 2 - if it's just one line, we don't need the brackets and we don't need the 'return' keyword.  more concise!
const squareArrow2 = (x) => x * x;

console.log(square1(5));
console.log(square2(5));
console.log(squareArrow(8));
console.log(squareArrow2(8));



// Challenge - use arrow functions

const fullName = "John Smith";

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }

// one-liner
const getFirstName = (fullName) => fullName.split(' ')[0];


console.log(`first name of ${fullName} is: ` + getFirstName(fullName));
```

And part 2:  More on arrow functions, this, and Map function.

**I should review this more somewhere else**

See "ES6 Aside: Arrow Functions Part II"

```javascript
// Challenge

const multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been multiplied

  numbers: [1, 2, 3],
  multiplyBy: 2,

  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2  [2, 4, 6]
```

# Added Bootstrap v4 - just because

[Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

# Getting back to React - Events and Attributes

* HTML attribute `class` in JSX is `className`
* lots of other HTML attributes have the same name but are camelcased.  See:
[React - All Supportd HTML Attributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)

Adding attributes and events with buttons to `app.js`

```javascript
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
```

