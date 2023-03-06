const pilotos = ['Vettel','Alonso','Raikonnen','Massa']

pilotos.pop() // remove o ultimo elemento
console.log(pilotos)

// aciona na ultima posição
pilotos.push('Hamilton')
console.log(pilotos)

//remove da primeira posição
pilotos.shift()
console.log(pilotos)

//adciona no primeiro elemento
pilotos.unshift('Barrichello')
console.log(pilotos)

//splice pode adicionar elmentos
pilotos.splice(2,0,'Bottas',"Massa")
console.log(pilotos)

//remover 
pilotos.splice(3,1)
console.log(pilotos)

//slice => retorna um novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

