// object.preventExtensions = previne o aumento de atributos
const produto = Object.preventExtensions({
    nome :'qualquer',preço:158.99 , tag: 'pramocinha'
})

console.log('Extensivel:',Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'Muito caro'
delete produto.tag
console.log(produto)

//object. seal => não permite adicionar atributos,nem remover atriburos,mas permite a modificação
const pessoa = {nome:'Juliana',idade: 25}
Object.seal(pessoa)

pessoa.nome = 'Marcola'
pessoa.descricao = 'normal'
delete pessoa.idade 
console.log(pessoa)

//object.freeze => nao modifica nada, se torna uma constante 
