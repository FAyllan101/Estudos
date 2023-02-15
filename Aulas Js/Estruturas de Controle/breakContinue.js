// break=> switch,for e while
// continue => for e while
// DESENCORAJADO apenas quando for necessário 

const nums=[1,2,3,4,5,6,7,8,9,10]
// fora do laço corrente
for (let i in nums){
    if (i==5) {
    break }
    console.log(`${i} = ${nums[i]}`)
}

// apenas onde parou (pula o que foi explixitado)
for( let y in nums){
    if(y==5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// com for rotulado
externo: 
for (a in nums){
    for (b in nums)
    if(a==2 && b==3) break externo
    console.log(`${a},${b}`)
} // NÃO USAR 