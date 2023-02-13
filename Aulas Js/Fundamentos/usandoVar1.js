// fica visivel dentro de blocos separados(variavel global) 

{{{{var sera = 'Será?? '}}}}
console.log(sera)

// quando a variavel está na funçao ela está visivel localmente (localmente)
function teste(){
    var local = 123
    console.log(local)
}

teste()
// (não funciona) console.log(local)