function Carro (velocidadeMaxima=200, delta= 5) {
    //atributo privado = let e const 
    let velocidadeAtual = 0 

    //metodo publico = this
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
       } else {
        velocidadeAtual = velocidadeMaxima
       }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

//metodo publico 


const uno = new Carro() 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())