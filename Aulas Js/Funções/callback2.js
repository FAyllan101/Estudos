const notas =[6, 4.8, 7, 8.5, 10, 9.75]

//sem callback 
const notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7 ){
        notasBaixas1.push(notas[i])
    }
}   
console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)

// arrow function 
const notasBaixas3 = notas.filter(nota => nota < 7 )
console.log(notasBaixas3)