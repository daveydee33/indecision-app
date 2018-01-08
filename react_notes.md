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
