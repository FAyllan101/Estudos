function getPreco(imposto =0, moeda ='R$'){
    return ` ${moeda} ${this.preco * (1- this.desc) * (1+imposto)}`
}

const produto ={
    nome: 'notebook',
    preco: 1247,
    desc: 0.12,
    getPreco
}

global.preco = 20
global.desc = 0.135
// chamar direto
console.log(getPreco)
// apartir de um objeto
console.log(produto.getPreco)
// call 
const carro = {preco:49999,desc:0.21}

console.log(getPreco.call(carro))
// apply
console.log(getPreco.apply(carro))

// no call passa primeiro o contexto e depois os paramentros para a funcao
console.log(getPreco.call(carro,0.17,'$'))
// no aplly passa o objeto e depois passa os parametros dentro de um array 
console.log(getPreco.apply(carro,[0.17,'$']))

