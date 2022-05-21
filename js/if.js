var nome = prompt('Qual seu nome?');
var idade = parseInt(prompt('Qual sua idade?'));

if(idade >= 35) {
    document.write(`Pode entrar, ${nome}!<br>`);
    var pedido = prompt('Qual seu pedido?');
    document.write(`Seu pediu foi ${pedido}`);
} else if (idade >= 18) {
    document.write(`Pode entrar, ${nome}!<br>`);
    document.write(`Mostre sua identidade!`);
} else {
    document.write(`Você tem ${idade} anos, ${nome} e por isso não pode entrar! Volte futuramente!`);
}