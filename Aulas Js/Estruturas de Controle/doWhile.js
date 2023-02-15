function getTinteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = -1
// para colocar o DO/while é colcoar o while na frente e o do no inicio

 do {
     opcao = getTinteiroAleatorioEntre(-1,10)
    console.log(`O número gerado foi ${opcao} .`)
} while (opcao != -1)
console.log('Finalizado!!')