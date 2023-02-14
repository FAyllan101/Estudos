// par nome/valor
const saudacao ='opa' //contexto léxico 1

function exec() {
    const saudacao = 'FALA' // contexto léxico 2 
    return saudacao 
}

// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade: 21,
    peso: 78,
    endereco:{
        logradouro:'rua alpha',
        numero :124
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)