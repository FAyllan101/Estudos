const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
// considera espaços,quebra de linha,etc...
const template = `olá 
${nome}!`

console.log(concatenacao,template)

//expressoes
console.log(`1 + 1 = ${1+1}`)
// funçao ellow

const up = texto => texto.toUperCase()
console.log(`Ei... ${up('cuidado')} !`)