// herança -> segue o msm principio do objeto e funçao

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}


class Pai extends Avo {
    constructor(sobrenome,profissao = 'Profesor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)