// var | let & const

// Hoisting

// scope variable

var name = "kodeakademia" //variabel global

if(true){
  var b = 5 //variabel global
  //let b = 5 //jika menggunakan let, akan menjadi lokal
  console.log(name)
}

function test(){ //deklarasi fungsi
  var a = 4 //variabel lokal karena berada dalam fungsi
  console.log(4)
  console.log(name)
}

//console.log(a) //Jika variabel a dipanggil diluar fungsi, maka akan error
//console.log(b) //Masih bisa karena variable b bersifat global, kecuali let dipakai

test() //memanggil fungsi test

//let dapat mengubah nilai variabel
let a = 5
a = 6
console.log(a)

//sedangkan const tidak dapat mengubah nilai variabel
const c = 4
c = 5
console.log(c)