const pessoa = {
    nome:'Rebeca',
    idade: 12,
    peso:65
}

console.log(Object.keys(pessoa)) // chave do objeto 
console.log(Object.values(pessoa))//valores do objeto
console.log(Object.entries(pessoa))// separa em array

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

// usando destructuring

Object.entries(pessoa).forEach(([chave,valor])=>{
    console.log(`${chave}: ${valor}`)
})

//definir propriedades dinamicamente
Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable:true, // listavel 
    writable:false,//listavel
    value :'01/01/2010' // definir o valor
})

pessoa.dataNascimento = '01/01/2557'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//object.assign => objetos concatenam no pimeiro objeto
const dest = { a : 1 }
const o1 = { b : 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest,o1,o2)
console.log(dest)