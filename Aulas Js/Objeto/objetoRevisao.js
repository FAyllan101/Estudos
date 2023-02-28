// colecao dinamica de pares chave/valor 
const produto = new Object 
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220
//constuiu um novo objeto dinamicamente com o new e colocou atributos com o .atributo

//removendo dinamicamente os atributos
console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


//objetos com outos objetos
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome:'Raul',
        idade:56,
        enderco:{
            logradouro:'Rua ABC',
            numero : 123
        }
    },
    condutores:[{ 
        nome:'Junior',
        idade: 28
    }, {
        nome:'Ana',
        idade:42
    }]
}