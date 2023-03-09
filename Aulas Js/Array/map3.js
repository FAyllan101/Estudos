// implementar map 
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i =0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"borracha","preco": 3.50}',
    '{"nome":"caderno","preco": 13.90}',
    '{"nome":"Kit lapis","preco": 41.22}',
    '{"nome":"caneta","preco": 2.39}',
]

//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
