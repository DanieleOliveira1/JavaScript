//criação do vetor
let num = [5,8,2,9,3]

//adiciona valores no vetor
//num[5] = 6

//cria um novo elemento sem especicar a posição
num.push(7)

//verificar o total de intens do vetor
console.log(num.length)

//ordena os valores do vetor em ordem crescente
console.log(num.sort())

//console.log(`Nosso vetor é ${num}`)

//for in - repetição para variáveis compostas
/*
for( let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/

//buscar valores dentro de um vetor e retorna a posição
console.log(num.indexOf(8))