function getTinteiroAleatorioEntre(min,max) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0
// laço de repetção

while(opcao != -1) {
    opcao = getTinteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log('Acabousssi!!')