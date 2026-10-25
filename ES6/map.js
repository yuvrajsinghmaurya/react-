// The map() method creates a new array with the results of calling a function for every array element.

const { useLayoutEffect } = require("react")



const numbers = [1,2,3,4,5,6]

// now map  the array
const doubled = numbers.map(x => x*2)

console.log(doubled)


// map() in React
// The map() method is commonly used in React to render lists of elements:

const fruitsList = ['apple' , 'banana' , 'cherry']

// function myList() {
//     return (
//         <div>
//             <ul>
//                 {fruitlist.map(fruit => 
//         <li key={fruit}>{fruit}</li>
//       )}
//             </ul>
//         </div>
//     )
// }







