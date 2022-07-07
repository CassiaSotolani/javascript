function calcMedia() {
    return (this.nota1 + this.nota2) / 2;
}

function criarAluno(nome, n1, n2) {

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: calcMedia
    }
}

var turma = [
    criarAluno("Cassia", 10, 8),
    criarAluno("Luana", 10, 10),
    criarAluno("Sonia", 8.5, 9.5)
]

for (var aluno of turma) {
    console.log(aluno.nome + ' - ' + aluno.media());
}

// Nova forma de instanciar um objeto
function criandoAluno(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = function() {
        return (this.nota1 + this.nota2) / 2;
    }
}

var a = new criandoAluno('Cassia2', 6.5, 8.5); //instancia de objeto
var a2 = new criandoAluno('Luana2', 6.5, 8.5); //instancia de objeto
var a3 = new criandoAluno('Sonia2', 6.5, 8.5); //instancia de objeto

console.log(a.nome + ' - ' + a.media());
console.log(a2.nome + ' - ' + a2.media());
console.log(a3.nome + ' - ' + a3.media());

//obs: instancia de objeto é quando pegamos um modelo de objeto e transformamos ele de fato em um objeto.