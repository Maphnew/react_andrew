console.log('App.js is running!')

// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "Here are your options" "No options"

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

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