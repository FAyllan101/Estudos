//  estrategia 1 
function soma1 (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(),soma1(3),soma1(1,2,3),soma1(0,0,0))

// estrategia 2, 3 e 4
function soma2(a,b,c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(),soma2(4),soma2(5,9,8),soma2(0,0,0))

//valor padrão do js 

function soma3 (a=1,b=1,c=1){
    return a + b + c
}

console.log(soma3(),soma3(4),soma3(5,9,8),soma3(0,0,0))