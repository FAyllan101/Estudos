const aprovados = ['Ahatha','Aldo','Daniel','Raquel']

//recebe semore o elemento e o indice, e o indice sempre vem no segundo parametro
//parametros do foreach => nome,indice,array
aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})


aprovados.forEach(nome=> console.log(nome))

//passar funcao para o for each 
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
