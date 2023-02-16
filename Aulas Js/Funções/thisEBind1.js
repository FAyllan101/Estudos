const pessoa = {
    saudacao : 'bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

// passa o objeto que quer referenciar
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

