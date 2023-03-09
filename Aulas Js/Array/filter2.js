// implementando o filter
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length ; i++){
      if(callback(this[i],i,this)) {
            newArray.push(this[i])
      }
    }
    return newArray
}

const produtos = [
    {nome:'Notebook',preco:2488.69,fragil:true},
    {nome:'iPad',preco:5879.78,fragil:true},
    {nome:'Copo de plastico',preco:11.79,fragil:false},
    {nome:'Copo de vridu',preco:17.13,fragil:true}
]



const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil = true

resultado = produtos.filter2(caro).filter2(fragil)
console.log(resultado)