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