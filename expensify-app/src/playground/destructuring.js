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


// Challenge
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
}

const {name:publisherName = 'Self-Published'} = book.publisher
console.log(publisherName)