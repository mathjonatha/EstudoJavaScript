// Início | Operações Básicas
function somar(parcela_a, parcela_b) {
  if ((parcela_a + parcela_b) == Infinity) {
    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'
  } else if (isNaN(parcela_a + parcela_b)) {
    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'
  } else{
    return parcela_a + parcela_b;
  }
};

function subtrair(minuendo, subtraendo) {
  if ((minuendo - subtraendo) == Infinity) {
    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'
  } else if (isNaN(minuendo - subtraendo)) {
    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'
  } else{
  return minuendo - subtraendo;
  }
};

function multiplicar(fator_a, fator_b) {
  if ((fator_a * fator_b) == Infinity) {
    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'
  } else if (isNaN(fator_a * fator_b)) {
    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'
  } else{
  return fator_a * fator_b;
  }
};

function dividir(dividendo, divisor) {
  if ((dividendo / divisor) == Infinity) {
    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'
  } else if (isNaN(dividendo / divisor)) {
    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'
  } else {
    return dividendo / divisor;
  }
};

function potenciar(base, expoente) {
    if (expoente == Infinity || expoente == 0) {
    return 'Não é possível dividir um número por zero. Podemos apenas dividir zero por algum número.'
  } else if (base == 0) {
    return 'A base tem que ser diferente de zero, tente novamente.'
  } else if (isNaN(base ** expoente)) {
    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'
  } else {
    return base ** expoente;
  }
};

function radiciar(radicando, indice) {
  if (indice == 0 || indice == 1) {
    return 'O índice não pode ser zero ou um, tente novamente.'
  } else if (isNaN(radicando ** (1 / indice))) {
    return 'Dados inválidos, verifique os números digitados e tente novamente. Lembre-se: digite apenas números.'
  } else {
    return  radicando ** (1 / indice);
  }
};

// Fim | Operações Básicas

// Início | Equações Básicos

function equacaoDoPrimeiroGrau(a, x, b) {

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
