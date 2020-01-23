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