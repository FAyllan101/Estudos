class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// com a funcao factory = ele sempre aponta pela variavel certa,por conta da variação do .this

const criarPessoa = nome => {
    return {
        falar:() => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()