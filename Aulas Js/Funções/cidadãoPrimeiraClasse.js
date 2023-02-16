// cidadao de primeira linha,high order function,frist class citizen
// forma literal
function fun1() { } // retorna undefined. Entre os () são os parametros

// armazenar uma variavel
const fun2 = function () {}

//armazenar num array 
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

// armazenar em um atributo objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//passar funçao como parametro
function run(fun){
    fun()
}

run(function() {console.log('Executando...')})

//retornar/conter uma função

function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
// chamar diretamente 
soma(2,3)(5)

// chamar de maneira com uma variavel
const doisMaisTres = soma(2,3)
doisMaisTres(5)