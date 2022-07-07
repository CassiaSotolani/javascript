// primeira forma de criar um objeto
var a = {
    nome: 'Cassia',
    sobrenome: 'Sotolani'
}

console.log(a.nome + ' ' + a['sobrenome']);

// segunda form de criar um objeto
function obj(n, s) {
    return {
        nome: n,
        sobrenome: s
    }
}

var a = obj('Cassia', 'Sotolani');
console.log(a['nome'] + ' ' + a.sobrenome);

// terceira forma de criar um objeto
function obj2(n, s) {
    this.nome = n;
    this.sobrenome = s;
}

var a2 = new obj2('Cassia', 'Sotolani');
console.log(a2.sobrenome + ', ' + a2['nome']);