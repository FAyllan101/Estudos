function divisivel (a){
    divisao= a/3
    validacao= a % divisao
    if (validacao=1){
        console.log('O número é divisivel por 3')
    }else{
        console.log('O número não é divisivel por 3')
    }
}

divisivel(6)
divisivel(8)
divisivel(9)
divisivel(333)