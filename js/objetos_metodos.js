// metodos são funcões
// quando tivermos uma function dentro de um objeto, essa função vai ser chamada de metodo
var aluno = {
    nome: 'Cassia',
    sobrenome: 'Sotolani',
    notas: [10, 7.5],
    media: function(n1, n2) {
        var media = (n1 + n2) / 2;
        return media;
    }
}

var aluno1 = {
    nome: 'Luana',
    sobrenome: 'Vincenzi',
    notas: [8, 6.5],
    media: function(n1, n2) {
        var media = (n1 + n2) / 2;
        return media;
    }
}

console.log(aluno);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));

console.log(aluno1);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));