const ferrai = {
    modelo :'F40',
    velMax :342
}

const volvo ={
    modelo : 'v40',
    velMax : 210
}

console.log(ferrai.__proto__)
console.log(ferrai.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
