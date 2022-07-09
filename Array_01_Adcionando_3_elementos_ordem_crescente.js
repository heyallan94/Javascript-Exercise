//02. Crie uma função que recebe um array de 3 números e coloque eles 
//em ordem crescente. Crie sua própria função para isso.
let arr =[ 17 , 2 , 3 ]

let index1 = arr[0] //menor
let index2 = arr[1] //maior
let index3 = arr[2] 

function semSort(){

let index1 = arr[0] //menor
let index2 = arr[1] //maior
let index3 = arr[2] 

for (let n = 0; n < arr.length; n++){ //pegar o menor número
    if (index1 > arr[n]){
        index1 = arr[n]
        }
}

console.log('Menor número ' + index1)

for (let n = 0; n < arr.length; n++){ //pegar o maior número
    if (index2 < arr[n]){
        index2 = arr[n]
       }
}

console.log('Maior número ' + index2)

for (let n = 0; n < arr.length; n++){ //pegar o meio
    if (arr[n] > index1 && arr[n] < index2){
        index3 = arr[n]
       }
}
console.log('Meio número ' + index3)

}

semSort()

console.log('Dados de entrada do usuário: ' + arr)
arr[0] = index1 //menor
arr[1] = index3 //meio
arr[2] = index2 //maior (Repare na posição que coloquei o maior)
console.log('Ordem decrescente: ' + arr)

arr[2] = index1 //maior (Repare na posição que coloquei o maior)
arr[1] = index3 //meio
arr[0] = index2 //menor
console.log('Ordem crescente: ' + arr)
