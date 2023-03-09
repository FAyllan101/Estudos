// filtrar array.
const produtos = [
    {nome:'Notebook',preco:2488.69,fragil:true},
    {nome:'iPad',preco:5879.78,fragil:true},
    {nome:'Copo de plastico',preco:11.79,fragil:false},
    {nome:'Copo de vridu',preco:17.13,fragil:true}
]


// console.log(produtos.filter(function(p){
//     return p.preco > 2400
// }))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil = true

resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)