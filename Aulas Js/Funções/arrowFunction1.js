let dobro = function(a){
    return 2 * a 
}

//para arrow ; tira o function e coloca a seta 
dobro = (a) => {
    return 2 * a
}

// sem parentesis caso tenha um unico parametro (função de uma única linha)
dobro = a => 2 * a // return implicito 

console.log(dobro(Math.PI))

// função sem parametro 
let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
console.log(ola())