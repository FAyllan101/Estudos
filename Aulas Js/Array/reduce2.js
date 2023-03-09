const alunos = [
    { nome: 'Joao', nota : 7.1 , bolsista: false},
    { nome: 'Maria', nota : 9.0, bolsista : true},
    { nome: 'Pedro', nota : 9.9, bolsista : false},
    { nome: 'Marta', nota : 8.1, bolsista : true}
]

// todos os alunos são bolsistas?

const todosBolsistas = (resultado,bolsista) => resultado && bolsista 
console.log(alunos.map(a=> a.bolsista).reduce(todosBolsistas))

//algum aluno e bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista 
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
