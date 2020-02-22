///
/// Object Destructuring
///

// const person = {
//     name: 'Maphnew',
//     age: 34,
//     location: {
//         city: 'Ulsan',
//         temp: 12
//     }
// }

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city = 'somewhere', temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }


//// Challenge
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// }

// const {name:publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName)

///
/// Array Destructuring
///

// 1. const address = [ '1299 S Junper Street', 'Philadelphia', 'Pennsylvania', '19147' ]
// 2. const address = [ ]
// 3. const address = [ '1299 S Junper Street', 'Philadelphia', 'Pennsylvania', '19147' ] 

// 1. const [street, city, state, zip] = address
// 1. console.log(`You are in ${city} ${state}.`)

// 2. const [, , state = 'New York'] = address
// 2. console.log(`You are in ${state}.`)

// 3. const [, city, state = 'New York'] = address 
// 3. console.log(`You are in ${city} ${state}.`)

// Challange
const item = [ 'Coffee (iced)', '$3.00', '$3.50', '$3.75' ]

// grab first and third items using array destructuring
const [ itemName, , mediumPrice ] = item
console.log(`A medium ${itemName} costs ${mediumPrice}`)