// Início | Operações Básicas
function somar(a, b) {
  return a + b;
};

function subtrair(a, b) {
  return a - b;
};

function multiplicar(a, b) {
  return a * b
};

function dividir(a,b) {
  return a / b
};

function potenciar(a, b) {
  return Math.pow(a, b)
}

function radiciar(a, b) {
  return Math.pow(a, 1/b)
};

// Fim | Operações Básicas

// Início | Equações Básicos

function equacaoDoPrimeiroGrau(a, x, b){
  return multiplicar(a, x) + b
};


// Fim | Equações Básicos


export {
  somar as sum,
  subtrair as sub,
  multiplicar as mul,
  dividir as div,
  potenciar as pow,
  radiciar as sqr,
  equacaoDoPrimeiroGrau as equ1
};