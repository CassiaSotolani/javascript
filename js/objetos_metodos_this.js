// this é referente ao objeto que ele está
// this depende do contexto, é uma variável que vai mudar de acordo com o contexto
// this é utilizando sempre no contexto de objeto
function calcMedia() {
    var media = (this.notas[0] + this.notas[1]) / 2;
    return media;
}

var aluno = {
    nome: 'Cassia',
    notas: [6, 8.5],

    media: calcMedia
}

var aluno2 = {
    nome: 'Luana',
    notas: [5.5, 6.5],

    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno2.nome);
console.log(aluno2.media());