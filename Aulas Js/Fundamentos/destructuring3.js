//  com função

function rand({min=0, max=1200}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 58,mins:41}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({}))

