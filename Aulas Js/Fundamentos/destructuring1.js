const pessoa = {
    nome: 'Ana',
    idade:65,
    endereco :{
        logradouro:'Rua CBA',
        numero: 1000
    }
}

// tirar itens de dentro dos objetos
const { nome, idade } = pessoa
console.log(nome,idade)

// personalizar os atributos
const { nome:n, idade:i} = pessoa
console.log(n,i)

// tirar atributos inexistentes e atribuição de valores padrão
const { sobrenome, bemHumorada = true} = pessoa 
console.log(sobrenome,bemHumorada)  

// acessar itens dentro de outro objeto
const { endereco: {logradouro,numero}} = pessoa 
console.log(logradouro,numero)
