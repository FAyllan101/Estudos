let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this == param)
comparaComThisArrow(global)
// para comparar com o modulo que está guardado no arrow
comparaComThisArrow(module.exports)

comparaComThis = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//  o this na arrow function nao varia mesmo com o uso do bind 