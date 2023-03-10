const alunos = [
    { nome: 'João', nota : 7.9},
    { nome:'Maria', nota :9.5}
]


//calculando a média
//Imperativo => foca no CONO deve ser feito,descrevendo
let tota1 = 0
for (let i =0; i< alunos.length;i++){
    tota1 += alunos[i].nota
}

console.log(tota1/ alunos.length)

//declarativo => foca mais no O QUE deve ser feito nao o COMO 
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)