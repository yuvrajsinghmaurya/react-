// Spread Operator
// The JavaScript spread operator (...) copies all or part of an existing array or object into another array or object.

const numberOne = [1,2,3];
const numberTwo = [4,5,6];

const numbercombined = [...numberOne, ...numberTwo]

console.log(numbercombined)

// Assign the first and second items from numbers to variables and put the rest in an array:

const num = [1,2,3,4,5,6,7]

const [one , two , ...rest] = num

console.log(one)
console.log(two)
console.log(rest)

// We can use the spread operator with objects too:

const Car = {
    brand:'Ford',
    model : 'mustang',
    colors : 'red'
}

const car_more= {
    type :'car',
    year : 2021,
    colors :'yellow'
}

const myCar = {...Car , ...car_more}

console.log(myCar)