//01. Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não use o método sort.

let arr = [ 5 , 4 ]

function menor(){

let index1 = arr[0]
let index2 = arr[1]

if (index1 > index2){
arr[0] = index2
arr[1] = index1
console.log(arr)

}else{ 
console.log(arr)
}}

menor()