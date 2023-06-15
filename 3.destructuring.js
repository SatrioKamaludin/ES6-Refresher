//destructuring, memecah data kompleks menjadi sederhana

//deklarasi 
const person = {
  name: "kaka",
  age: 32
}

//tanpa destructuring, harus memanggil nama objek person
//console.log(person.name)
//console.log(person.age)

//dengan destructuring, tanpa harus memanggil nama objek person
const {name, age} = person

console.log(name)
console.log(age)

//destructuring pada kasus array
const arr = [1, 3, 5]

// //tanpa destructuring
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

//dengan destructuring
const [a, b ,c] = arr
console.log(a)
console.log(b)
console.log(c)