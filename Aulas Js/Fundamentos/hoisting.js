console.log('a=',a)
var a = 2 
console.log('a=',a)
// funciona para função tambem
function teste(){
    console.log('a=',a)
    var a = 2 
    console.log('a=',a)
}
// hoisting não funciona no let
let b=2 
console.log(b)