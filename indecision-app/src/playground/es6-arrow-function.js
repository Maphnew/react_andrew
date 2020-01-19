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