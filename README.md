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


```JavaScript
// src/app.js

let count = 0
const addOne = () => {
    console.log('addOne')
}
const minusOne = () => {
    console.log('minusOne')
}
const reset = () => {
    console.log('reset')
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
)

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)
```

17. Manual Data Binding
12분

- Data Binding
- Virtual DOM algorithm

```JavaScript
// src/app.js

let count = 0
const addOne = () => {
    count++
    rederCounterApp()
}
const minusOne = () => {
    // subtract 1 from count - rerender
    count--
    rederCounterApp()
}
const reset = () => {
    // set count to 0 a rerender
    count = 0
    rederCounterApp()
}

const appRoot = document.getElementById('app')

const rederCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot)
}

rederCounterApp()
```

18. Forms and Inputs
18분

```JavaScript
// src/app.js

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
    render()
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const appRoot = document.getElementById('app')

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
    
}

render()
```

19. Arrays in JSX
14분

- map Arrays & return some html thing.

```JavaScript
// src/app.js

const numbers = [55, 101, 1000]

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                numbers.map((number)=>{
                    return <p key={number}>Number: {number}</p>
                })
            }
            {<p>1</p>}
            <ol>
                {/* map over app.options getting back an array of lis (set key and text) */
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
    
}

```

20. Picking an Option
9분

- Random, Floor
- disabled

```JavaScript

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

```

21. Build It: Visibility Toggle
9분

- Change source to watch!

```bash
$ babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react
```

```JavaScript
// playground/build-it-visible.js
let visibility = false

const toggleVisibility = () => {
    visibility = !visibility
    render()
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
        
    )

    ReactDOM.render(jsx, document.getElementById('app'))
}

render()
```


## Section 4: React Components
3시간

22. Section Intro: React Components
1분

- React is component based architecture
- Break big complex application up into small pieces(component)

23. Thinking in React
7분

> Twitter  
- header component \<Header />
- profile component \<ProfileWidget />
- trends component \<Trends />
- trend component \<Tend />
- tweet component \<Tweet />
- parent component \<DashboardPage />

> Indecision app  
- \<IndecisionApp />
- \<Header />
- \<Action />
- \<Options />
- \<Option />
- \<AddOption />

24. ES6 Classes: Part I
21분

- Class
- constructor function
- back tick `` and ${}
- instances

```JavaScript
// playground/e6-classes-1.js

// Challenge
// Setup constructor to take name and age (default to 0)
// getDescription - Maphnew Kim is 35 year(s) old.

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        // return 'Hi. I am ' + this.name + '!'
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

const me = new Person('Maphnew Kim', 35)
console.log(me.getDescription())

const other = new Person()
console.log(other.getDescription())
```

25. ES6 Classes: Part II
18분

- extends class
- super()
- !!''

```JavaScript

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    hasMajor() {
        return !!this.major
        // !'' true
        // !!'' false
        // !!'andrew' true
        // !!undefined false
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }

        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreeting(){
        let greeting = super.getGreeting()

        if (this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }

        return greeting
    }
}

// Challenge
// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am Maphnew Kim. I'm visiting from New York.
// 2. Hi. I am Maphnew Kim.

const me = new Traveler('Maphnew Kim', 35, 'New York')
console.log(me.getGreeting())

const other = new Traveler(undefined, undefined, 'Nowhere')
console.log(other.getGreeting())

```

26. Creating a React Component
15분

- UpperCase
- render()
- \<Component />

```JavaScript
// src/app.js

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a Computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

// Challenge
// Options  -> Options component here
class Options extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>option1</li>
                    <li>option2</li>
                    <li>option3</li>
                </ul>
            </div>
        )
    }
}

// Challenge
// AddOption -> AddOption component here
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>ADD</button>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
```

27. Nesting Components
6분

- Nesting Components
```JavaScript
// src/app.js
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a Computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
                <Option />
            </div>
        )
    }
}

// Challenge
// Option -> Option component here
class Option extends React.Component {
    render() {
        return (
            <div>
                Option component here
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>ADD</button>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
```

28. Component Props
14분

- props
- this.props.something

```JavaScript
// scr/app.js

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a Computer'
        const options = ['Thing one','Thing two', 'Thing four']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

// Challenge
// Setup options prop for Options component
// Render the length of the array

// Render new p tag for each option (set text, set key)

class Options extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

// Challenge
// Option -> Option component here
class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <button>ADD</button>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

```

29. Events & Methods
11분

- jsx onClick, onSubmit
- function in the class

```JavaScript
// src/app.js

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
                
            </div>
        )
    }
}

// Challenge

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// Setup onClick to fire the method

class Options extends React.Component {
    handleRemoveAll() {
        alert('handleRemoveAll')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}


// Challenge

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        if(option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>ADD Option</button>
                </form>
            </div>
        )
    }
}
```

30. Method Binding
11분

```JavaScript
// example

const obj = {
    name: 'Virkram',
    getName() {
        return this.name
    }
}

// const getName = obj.getName // x
const getName = obj.getName.bind(obj)
// const getName = obj.getName.bind({ name: 'Maphnew'})

console.log(getName())

```
- constructor(props)

```JavaScript
// src/app.js

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        console.log(this.props.options)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}
```
31. What Is Component State?
7분

> 1. Setup default state object   
> 2. Component rendered with default state values   
> 3. Change state based on event   
> 4. Component re-rendered using new state values
> 5. Start again at 3  

32. Adding State to Counter App: Part I
8분

```JavaScript
// playground/counter-example.js

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    handleAddOne(){
        console.log('AddOne')
    }
    handleMinusOne(){
        console.log('MinusOne')
    }
    handleReset(){
        console.log('Reset')
    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// Wire up onClick & bind in the constructor

ReactDOM.render(<Counter />, document.getElementById('app'))
```

33. Adding State to Counter App: Part II
11분

```JavaScript
// playground/counter-example.js

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    handleMinusOne(){
        // Call this.setState decrement the count by 1
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}
```

34. Alternative setState Syntax
7분

```JavaScript
// playground/counter-example.js
// example

    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
        // this.setState({
        //     count: 0
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
    }
```

35. Build It: Adding State to VisibilityToggle
8분

```JavaScript
// playground/build-it-visible.js

// VisibilityToggle - render, constructor, handleToggleVisibility
// visibility -> false

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return { 
                visibility : !prevState.visibility
            }
        })

    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey, These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
```

36. Indecision State: Part I
17분

- state / options(changing values), props / methods, binding props and state

```JavaScript
// src/app.js

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options : ['Thing one','Thing two', 'Thing four']
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    // handlePick - pass down to Action and setup onClick - bind here
    // randomly pick an option and alert it
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a Computer'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
                
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}


```

37. Indecision State: Part II
15분

- child class has constructor and props/state

```JavaScript
// src/app.js
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options : []
        }
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) =>{
            return {
                options : prevState.options.concat(option)
            }
        })
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a Computer'
        
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props) 
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => {
            return { error }
        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>ADD Option</button>
                </form>
            </div>
        )
    }
}
```

38. Summary: Props vs. State
4분

- Props    
> - One way(parent -> child)   
> - An object   
> - Can be used when rendering    
> - Changes (from above) cause re-renders   
> - Comes from above   
> - Can't be changed by component itself   

- State   
> - An object   
> - Can be used when rendering    
> - Changes cause re-renders   
> - Defined in component itself   
> - Can be changed by component itself   

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