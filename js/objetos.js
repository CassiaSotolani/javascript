// objeto é a relação de uma chave e um valor (key => value)
var aluno = {
    nome: 'Cassia',
    sobrenome: 'Sotolani',
    idade: 30,
    ano: 9,
    notas: [10, 8.5]
}

console.log(aluno['notas'][0]);
console.log(aluno.notas[1]);
console.log(aluno.nome);

// formas de adicionar novas propriedades em um objeto
aluno.matricula = 123456;
aluno['materia'] = 'Matemática';

var novaPropriedade = 'materia2';
aluno[novaPropriedade] = 'Português';

console.log(aluno);

// outra forma de criar um objeto
var aluno2 = new Object();

aluno2.nome = 'Luana';
aluno2.sobrenome = 'Vincenzi';

console.log(aluno2.nome);