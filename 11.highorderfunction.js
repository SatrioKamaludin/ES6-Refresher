// High Order Function

// map
const fruits = [
  {
    id: 1,
    name: "Apple",
    price: 2000
  },
  {
    id: 2,
    name: "Banana",
    price: 3000
  },
  {
    id: 3,
    name: "Orange",
    price: 4000
  }
]

console.log("map")
const fruitName = fruits.map(item => item.name)
console.log(fruitName)

// filter
console.log("filter")
const apple = fruits.filter(item => item.name === "Apple") // !== maka hasil yang keluar selain Apple
console.log(apple)

//find
console.log("find")
const orange = fruits.find(item => item.name === "Orange")
console.log(orange)

//reduce
console.log("reduce")
const totalPrice = fruits.reduce((total, currentItem) => total + currentItem.price, 0) //Harga Apple + Banana + Orange
console.log(totalPrice)