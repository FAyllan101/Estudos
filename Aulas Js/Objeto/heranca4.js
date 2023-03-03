function MeuObjeto() {}
console.log(MeuObjeto.prototype)
//o proto vai apontar pra a funcao criada
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

// colocar atributos no prototipo
MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Olá meu nome é: ${this.nome}! `) 
}

obj1.falar()

obj2.nome = 'Ana'
obj2.falar()

const obj3 ={}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()


// resumo 
// console.log(new MeuObjeto).__proto__=== MeuObjeto.prototype
// console.log(MeuObjeto.__proto__ === function.prototype)
// console.log(function.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__ === null)
