// map serve para transformar um array num outro,mantendo o tamanho
const nums= [1,2,3,4,5] 

//for com proposito
//map pode receber o valor atual,o indice ou o array completo

let resultado = nums.map(function(e){
    return e * 2 
})

console.log(resultado)

//maps sucessivos => nao modifica o array atual,ele gera um novo array

const soma10 = e => e + 10 
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


resultados = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultados)