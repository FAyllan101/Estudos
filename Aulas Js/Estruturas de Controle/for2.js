const notas = [9.2,6.2,7.8,2.3]

for (let i in notas){
    console.log(i,notas[i])
}

// no objeto

const pessoa ={
    nome: 'Ana',
    sobrenome:'Silva',
    idade:29,
    peso:89
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

