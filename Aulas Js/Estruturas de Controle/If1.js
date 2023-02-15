function soBoaNoricia(nota){
    if (nota >=7) {
        console.log("passou")
    }
    // else{
    //     console.log("não passou")
    // }
}

soBoaNoricia(7)
soBoaNoricia(6.7)
soBoaNoricia(7.1)

// para converter em true/false
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É vesrdadiii... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})
