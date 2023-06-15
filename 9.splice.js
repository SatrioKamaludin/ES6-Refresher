//Splice method (biasanya digunakan untuk menambah dan menghapus data baru ke array)

const num = [1, 2, 3]

//num.splice(1, 1, 4)  //(parameter 1 indeks data array yang akan dihapus, parameter 2 jumlah data yang akan dihapus, parameter 3 penggantinya) output: [1, 4, 3]

num.splice(1, 2, 4, 5) //output: [1, 4, 5]

console.log(num)