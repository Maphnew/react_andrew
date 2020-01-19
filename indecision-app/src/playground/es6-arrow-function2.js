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