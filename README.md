# react_andrew


## Section 1: Welcome
10분 

1. Welcome & Asking Good Questions
5분

- How to build React App
- Part 1: How to build, render, submit form, user interaction
- Part 2: Advanced, Ecosystem, Auth, Deploy
- Using Q&A  

2. "Why should I learn React?"
5분

- Library
- The React community

## Section 2: Setting up Your Environment
7분

3. Section Intro: Setting up Your Environment
1분

4. Installing Visual Studio Code
2분

5. Installing Node.js & Yarn
4분

```bash
$ npm i -g yarn
$ yarn --version
```

## Section 3: Hello React
0 / 16|3시간 45분

6. Section Intro: Hello React
2분

- http://indecision.mead.io
- http://links.mead.io/indecision

- Fundermentals
- JSX

7. Setting up a Web Server
12분

```bash
$ npm install -g live-server
$ live-server -v
$ live-server public
```

8. Hello React
19분

```JavaScript
// app.js

console.log('App.js is running!')

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js</p>
var template = React.createElement("h1", {
    id: "aa s",
    className: "aaa fff fff"
  }, "This is JSX ggg");
var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
```

9. Setting up Babel
17분

```bash
$ yarn global add babel-cli@6.24.1
or $ npm i -g babel-cli@6.24.1
$ babel --help
```

```bash
$ yarn init
$ yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
```
- Created package.json and yarn.lock

```bash
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```
- JSX to JavaScript

- To install node modules
```bash
$ yarn install
```
- git ignore
```bash
$ git rm -r --cached .
$ git add .
$ git commit -m "fixed untracked files"
```

10. Exploring JSX
15분

```JavaScript
// app.js


console.log('App.js is running!')

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

var templateTwo = (
    <div>
        <h1>Maphnew Kim</h1>
        <p>Age: 20</p>
        <p>Location: KOREA</p>
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
```

11. JSX Expressions
10분

```JavaScript
// app.js

console.log('App.js is running!')

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)
var user = {
    name: 'Maphnew',
    age: 25,
    location: 'New York'
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)
```

12. Conditional Rendering in JSX
23분

- Conditional Rendering
- Conditional Logic in general

- 1. if statements
```JavaScript
// 1. if statements

// app.js
var user = {
    name: 'Maphnew',
    age: 25
}
function getLocation(location) {
    if (location) {
        return location
    } else {
        return 'Unknown';
    }
}
var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
)
```
- 2. ternary operators
```JavaScript
// ternary operators
true ? 'Maphnew' : 'Anonymous'
"Maphnew"

false ? 'Maphnew' : 'Anonymous'
"Anonymous"

// app.js
var user = {
    name: 'Maphnew',
    age: 25
}
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } 
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
)
```
- 3. logical and operator
```JavaScript
// logical and operator
true && 'Some age'
"Some age"

false && 'Some age'
false

// app.js
var user = {
    name: 'Maphnew',
    age: 35,
    location: 'Ulsan'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    } 
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
```



13. ES6 Aside: const and let
16분
- Create folder and file 'playground/es6-let-const.js'
```bash
babel .\src\playground\es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
```

```JavaScript
// playground/es6-let-const.js

var nameVar = 'Maphnew'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'Juli'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst)

function getPetName() {
    const petName = 'Hal'
    return petName
}

const petName = getPetName()
console.log(petName)

// Block scoping (let, const)

const fullName = 'Jen Kim'
let firstName

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName)
```

14. ES6 Aside: Arrow Functions
13분

```JavaScript
// playground/es6-arrow-function.js

const square = function (x) {
    return x * x
}

function anotherSquare(x) {
    return x * x
}

// const squareArrow = (x) => {
//     return x * x
// }

const squareArrow = (x) => x * x

console.log(square(8))
console.log(squareArrow(4))

// challenge - use arrow functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using shorthand syntex

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}
console.log(getFirstName('Mike Smith'))

const getFirstName2 = (fullName) => fullName.split(' ')[0]
console.log(getFirstName2('Sam Smith'))
```

15. ES6 Aside: Arrow Functions Part II
20분

```JavaScript
// playground/es6-arrow-function2.js

// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments)
    return a + b
}

console.log(add(55, 1, 1001))

// this keyword - no longer bound

const user = {
    name: 'Maphnew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + this.city)
    }
}

console.log(user.printPlacesLived())

// challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply()) // [1,2,3] 2 [2,4,6]
```

16. Events and Attributes
17분

17. Manual Data Binding
12분

18. Forms and Inputs
18분

19. Arrays in JSX
14분

20. Picking an Option
9분

21. Build It: Visibility Toggle
9분



## Section 4: React Components
3시간
## Section 5: Stateless Functional Components
1시간 23분
## Section 6: Webpack
2시간 16분
## Section 7: Using a Third-Party Component
29분
## Section 8: Styling React
2시간 8분
## Section 9: React-Router
1시간 35분
## Section 10: Redux
3시간
## Section 11: React with Redux
3시간 2분
## Section 12: Testing Your Application
4시간 14분
## Section 13: Deploying Your Apps
2시간 44분
## Section 14: Firebase 101
1시간 58분
## Section 15: Firebase with Redux
2시간 6분
## Section 16: Firebase Authentication
1시간 52분
## Section 17: Styling Budget App
2시간 4분
## Section 18: What Now?
28분
## Section 19: [New!] Hooks, Context, Fragments, and More
2시간 48분