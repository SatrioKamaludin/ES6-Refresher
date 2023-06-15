//Spread Operator and Rest Parameter

//Spread
let arr1 = [1, 2 , 3];
let arr2 = [...arr1, 4, 5, 6]
console.log(arr2)

const club = {
  id: 1,
  country: "Italia"
}

const milan = {
  ...club,
  name: "Milan"
}

console.log(milan)

//Rest
//example 1
const restexample = (a, b, ...rest) => {
  console.log("rest", rest)
  return a + b
}

console.log(restexample(1, 5, 2, 3, 4)) // a and b is summed, while 2, 3 and 4 are rested

//example 2
const add = (a, b, ...rest) => {
  let total = 0;
  for(let i = 0; i < rest.length; i++){ //lakukan loop sebanyak jumlah elemen array rest
    total += rest[i] //menghitung jumlah total seluruh isi nilai array rest
  }
  return a + b + total
}

console.log(add(1, 5, 2, 3, 4))