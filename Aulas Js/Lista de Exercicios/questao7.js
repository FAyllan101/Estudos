// 3 parametros
// se delta for negativo => erro

const baskara =function baskara1(valorA,valorB,valorC){
    const valorAVezesC = valorA*valorC
    const valorBAoQuadrado= valorB**2
    const delta2 = 4*valorA*valorC
    const delta = valorBAoQuadrado - delta2
    const deltaFinal = Math.sqrt(delta)
    const divisao = 2*valorAVezesC
    const deltaZero= valorBAoQuadrado + delta / divisao 
    const raiz2= valorBAoQuadrado - delta / divisao 


    if(deltaFinal < 0){
        return console.log(` O valor de delta é negativo`)
    } if(deltaFinal == 0){
        return console.log(`Delta é zero e a raiz é ${deltaZero}`)
    }else{
        return console.log(`Os valores das raízes são: ${deltaZero} e ${raiz2}`)
    }
}


baskara(1,12,-13)
baskara(1,-14,50)
baskara(500,-1,800)