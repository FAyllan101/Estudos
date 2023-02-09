// deslcarando manualmente 
const valores = [7.8,7.1,2.9,5.7]
console.log(valores[0],valores[3])
console.log(valores[4])
// inserindo

valores[4] = 9.9
console.log(valores)
// quantidade de itens
console.log(valores.length)

// push 
valores.push({id:5},false,null,"alou")
console.log(valores)

// tirar o ultimo valor do array
console.log(valores.pop())
// deletar o valor do indice escolhido
delete valores[0]
console.log(valores)

console.log(typeof valores)