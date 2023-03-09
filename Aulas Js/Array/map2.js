const carrinho = [
    '{"nome":"borracha","preco": 3.50}',
    '{"nome":"caderno","preco": 13.90}',
    '{"nome":"Kit lapis","preco": 41.22}',
    '{"nome":"caneta","preco": 2.39}',
]

//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)