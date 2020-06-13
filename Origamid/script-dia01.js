var nome = 'Gabriel',
    sobrenome = 'Felipe',
    idade = 12,
    cidade = 'Natal',
    nomeCompleto = nome + ' ' +sobrenome;

console.log(nome,idade,cidade)


var preco = 25;
var quantidadeComprada = 5;
var totalPreco = preco * quantidadeComprada;

console.log(totalPreco);

console.log(typeof sobrenome, typeof cidade, typeof idade);

console.log('Meu nome é ' + nome + ' ' + sobrenome + ' ' + 'tenho' + ' ' + idade + ' '+ 'anos e moro em' + ' ' + cidade);

console.log(`Meu nome é ${nomeCompleto} tenho ${idade} anso e moro em ${cidade}`);
console.log(`Meu nome é ${nome} ${sobrenome} tenho ${idade} anso e moro em ${cidade}`)


// Números e Operadores 01

var soma = 10 + 5;
var subtracao = 10 - 8;
var multiplicacao = 20 * 2;
var divisao = 10/5;
var potencia = 10 ** 2;
var resto = 15 % 2;

console.log(soma,
            subtracao,
            multiplicacao,
            divisao,
            potencia,
            resto,
            isNaN(resto)
);

var incremento = 5;
console.log(incremento);
console.log(++incremento);


// Boleano

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiGraduacao){
    console.log('Tem graduação');
} else if(possuiDoutorado) {
    console.log('Tem doutorado');
} else {
    console.log('Não é formado');
}


var meuNome = nomeCompleto;

switch (meuNome) {
    case 'Matheus Jonatha':
        console.log('Correto baby!');
    break;
    case 'MatheusJonatha':
        console.log('Falta pouco, tenta novamente.');
        break;
    default:
        console.log('Errou parceiro.');
}

// Funções
var numero = 5;

function areaQuadrado(lado){
    return lado * lado
}

console.log(areaQuadrado(numero));


function meuNomeESobrenome(meuNome){
    if(meuNome === 'Matheus Jonatha') {
        return 'Você acertou!';
    } else {
        return 'Confira novamente.';
    }
}

console.log(meuNomeESobrenome(nomeCompleto));


addEventListener('click', function(){
    console.log(meuNomeESobrenome(nomeCompleto));
})


function meuNomeEmFuncao(nome,sobrenome){
    return `${nome} ${sobrenome}`; 
}

console.log(meuNomeEmFuncao(nome,sobrenome));