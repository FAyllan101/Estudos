console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// pode adicionar novos atributos usanso o nomedafuncao.attributo
String.prototype.reverse = function(){
    return this.split('').reverse('').join('')
}

console.log('Alouuueie'.reverse())

Array.prototype.first() = function(){
    return this[0]
}
console.log([1,5,8,43].first())
console.log(['a','d','e','s'].first())