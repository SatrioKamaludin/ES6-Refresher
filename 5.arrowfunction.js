//Arrow Function

//function expression
// const add = function(a,b){
//   let sum = a + b
//   return sum
// }

//console.log(add(4, 6))

//function declaration
// function add(a, b){
//   let sum = a +b
//   return sum
// }

// console.log(add(4, 6))

//arrow function
const add = (a, b) => {
  let sum = a + b
  return sum
}

const number = a => `the number is ${a}`
const numberok = () => `the number is ok`
const sum = (a, b) => a + b

console.log(add(4, 6))
console.log(number(4))
console.log(numberok())
console.log(sum(1, 2))