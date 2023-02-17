const prod1 = {
    nome:'...',
    preco: 53
}
const prod2 = {
    nome:'...',
    preco: 533
}

//factory simples => sempre retorna um novo ojeto

function criarPessoa(){
    return{
        nome: 'Ana', 
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

