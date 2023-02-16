//  funcao declarada => funciona mesmo antes de declarar a função
console.log(soma(3,4))
// function ;nome (parametros){corpo}
function soma(x,y){
    return x + y
}

// funcao expression => funciona so depois de declarar as funcoes 
// nome da constante ou variavel = funcao(parametos){corpo}
const sub = function(x,y) {
    return x - y 
}

// named function expression = mistura das duas
const multi = function multi(x,y) {
    return x * y
}

console.log(soma(1,2))
console.log(sub(3,2))
console.log(multi(2,3))