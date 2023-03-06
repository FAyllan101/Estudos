// array é um objeto 

//não aprpriado. Mais apropriado é criar com a notação literal

let aprovados = new Array('Bia','Carlim','Zé')
console.log(aprovados)

//indexado, se inicia no indice [0]

aprovados = ['Bia','Carlim','Zé']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

// substituir elemento no array
aprovados[3] = 'Paulim'
// adicionar elementos
aprovados.push('Chico')
console.log(aprovados[3])
console.log(aprovados.length)

aprovados[9]='Rafinha'
console.log(aprovados.length)
console.log(aprovados[7]===undefined)

console.log(aprovados)
//altera o array
aprovados.sort()
console.log(aprovados)

// excluir 
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//splice => adicionar,receber ou adicionar e receber ao mesmo tempo 
aprovados = ['Bia','Carlim','Zé']
aprovados.slice(1,1)
console.log(aprovados)

