const sequencia = {
    _valor: 1 , // convencao de nao mudar
    get valor() {return this._valor++},
    set valor(valor) { // valida apenas valores depois do definido
        if(valor > this._valor1){
            this._valor1 = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor,sequencia.valor)