/**
 * Melhor usar aspas simples
 * e quando for usar outra variável dentro da string, usar sinal de crase
 */

var nome = 'Cassia Sotolani';
var str = `Valor qualquer "aqui aspas duplas", ${nome} aqui aspas simples`;
console.log(str);

/**
 * Curiosidade
 *  se tiver uma string com um numero dentro (ex: var numero = "8") e essa string for
 *  multiplicada (*) por um número (ex: var numero = "8" * 2), o resultado vai ser 16.
 *  o javascript transforma a string em number.
 */

/**
 * Para tranformar um string com número dentro (ex: var a = "10"), para esse "10" ser um
 * número, usamos o parseInt(a).
 *  ex: var a = "3"
 *      var b = "6"
 *      var c = parseInt(a) + parseInt(b);
 *      resultado = 9 
 */

/**
 * Para tranformar um string com número dentro (ex: var a = "10.5"), para esse "10.5" ser um
 * número, usamos o parseFloat(a).
 *  ex: var a = "3.5"
 *      var b = "6.2"
 *      var c = parseFloat(a) + parseFloat(b);
 *      resultado = 9.7 
 */