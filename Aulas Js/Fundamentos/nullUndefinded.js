let valor //variavel não inicializada
console.log(valor)

// nulo 
valor = null // ausencia de valor,usado para zerar o valor de uma variável
console.log(valor)
// console.log(valor.toString())

const produto ={}
console.log(produto.preco)
console.log(produto)

produto.preco = 6.15
console.log(produto.preco)

produto.preco = undefined //evitar usar 
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço,sem valor atribuido
console.log(!!produto.preco)
console.log(produto)

