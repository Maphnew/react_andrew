console.log('person!')

const isAdult = (age) => age >= 18
const canDrink = (age) => age >= 21
const isSenior = (age) => age >= 65

// export default (age) => age >= 65
// export { isAdult, canDrink}
export { isAdult, canDrink, isSenior as default }