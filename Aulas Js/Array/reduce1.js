const alunos = [
    { nome: 'Joao', nota : 7.1 , bolsista: false},
    { nome: 'Maria', nota : 9.0, bolsista : true},
    { nome: 'Maria', nota : 9.9, bolsista : false},
    { nome: 'Marta', nota : 8.1, bolsista : true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual 
},10)

