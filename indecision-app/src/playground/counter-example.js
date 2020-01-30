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

// let count = 0
// const addOne = () => {
//     count++
//     rederCounterApp()
// }
// const minusOne = () => {
//     // subtract 1 from count - rerender
//     count--
//     rederCounterApp()
// }
// const reset = () => {
//     // set count to 0 a rerender
//     count = 0
//     rederCounterApp()
// }

// const appRoot = document.getElementById('app')

// const rederCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// rederCounterApp()