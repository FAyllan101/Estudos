const escola = 'texte'
// pega um caractere 
console.log(escola.charAt(4))
// na tabela unicode
console.log(escola.codePointAt(3))
// inverso
console.log(escola.indexOf('2'))

// substring => palavra apenas depois do valor selecionado
console.log(escola.substring(2))
// inicio até o final
console.log(escola.substring(0,3))

// concatenar ou usando + 
console.log('escola '.concat(escola).concat(' !!!'))
// mudar o valor selecionado
console.log(escola.replace("x", 's'))

// string para array
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro')