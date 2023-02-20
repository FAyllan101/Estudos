function juros1(capitalInicial,taxaDeJuros,tempo){
    const simples = capitalInicial * taxaDeJuros * tempo 
    const composto = capitalInicial *((1 + taxaDeJuros)**tempo)


    return console.log(`foram aplicados R$ ${capitalInicial}, por ${tempo} meses, em uma taxa de ${taxaDeJuros} % a.m. E em juros simples rendeu: R$ ${simples.toFixed(2)} e em juros compostos rendeu: R$ ${composto.toFixed(2)}`)
}

juros1(620,0.015,24)