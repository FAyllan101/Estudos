const peso1 = 1.0
const peso2= Number('2.0')

console.log(peso1,peso2)
// saber o tipo de valor, se é inteiro ou não
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.930
const avaliacao2 = 6.941

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)
// como fixar as quantidades de casas decimais

console.log(media.toFixed(2))
// mudar valor para string
console.log(media.toString)
// para binário 
console.log(media.toString(2))