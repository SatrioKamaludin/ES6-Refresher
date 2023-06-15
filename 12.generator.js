//Generator

// function biasa(){ 
//   return 2
//   return 1 // tidak dioutputkan
//   return 3 // tidak dioutputkan
// }

//console.log(biasa()) // output: 2

//Menggunakan generator
function* generator() {
  yield 1
  yield 2
  yield 3
  return 4
}

const gen = generator()

console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
console.log(gen.next()) //value: 3, done: false
console.log(gen.next()) //value: 4, done: true
console.log(gen.next()) //value: undefined, done: true
