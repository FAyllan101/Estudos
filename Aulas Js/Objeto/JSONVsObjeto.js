//json é texto,nao tem funcoes 
// obj para JSON
const obj = {a:1,b:2,c:3,soma (){return a + b + c }}
console.log(JSON.stringify(obj))

//JSON para objeto
//json tem que ser delimitado por aspas duplas
//console.log(JSON.parse("{a:1,b:2,c:3}"")) -> nao é valido 
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"")) -> nao é valido
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a":1,"b":"sting","c":true,"d":{},"e":[]}'))
