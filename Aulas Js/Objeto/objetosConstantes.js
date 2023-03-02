//constante se refere ao local de memoria alocado para aquela constante, o endereço e nao ao dado dentro dela,ou seja pode mudar os dados de um array, objeto ... etc

const pessoa = {nome:'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//congelar o objeto, o torna imutavel o torna uma constante
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'rua ABC'


console.log(pessoa.nome)