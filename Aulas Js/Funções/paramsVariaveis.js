function soma () {
    let soma = 0 
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(2))
console.log(soma(1.5,8.69,98.7))
console.log(soma(9.8,5.7,"Resol"))
console.log(soma('a','b','c'))
