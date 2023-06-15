// Default Parameter

//Misalkan ada fungsi
// function add(a,b){
//   return a+b
// }

    //NaN karena tidak diisikan argumen
//console.log(add(2, 5)) //output: 7

//Default Parameter itu seperti ini, dimana nilai a dan b sudah dideklarasikan dari awal
function add(a = 1, b = 3){
  return a+b
}

console.log(add()) //hasilnya a + b = 1 + 3 = 4
console.log(add(2, 5)) //hasilnya 7 karena argumen mengoverride nilai a dan b yg sudah dideklarasikan
