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