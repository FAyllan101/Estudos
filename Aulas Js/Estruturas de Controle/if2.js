
function teste1(num) {
    if(num > 7) 
        console.log(num)
    console.log('Final')// sempre será executado
}

// teste1(6)
// teste1(8)

function teste2(num) {
    if (num>7); { // cuidado com o ;, não usar com estrutura de controle (não considera o código)
        console.log(num)
    }
}

teste1(6)
teste1(8)