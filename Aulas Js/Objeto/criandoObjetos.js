// usando a notação literal
const obj1 = {}
console.log(obj1)

// object em js - funcao construtora
const obj2= new Object 
console.log(obj2)

// funcao construtora personalizada
function Produto(nome,preco,desconto){
    this.nome = nome
    this.getPrecoComDesconto =() =>{
        return preco * (1-desconto)
    }
}

const p1 = new Produto('Caneta',0.10,0.001)
const p2 = new Produto('Notebook',2599.99,0.15)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

// Funcao factory
function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30-faltas)
        }
    }
}

const f1= criarFuncionario('João',1500,4)
const f2= criarFuncionario('Maria',2500,15)
console.log(f1.getSalario(),f2.getSalario())

// object.create 
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma funcao famosa que retorna um objeto 
// const fromJSON = JSON.parse('{"info:eu sou um json"}')
