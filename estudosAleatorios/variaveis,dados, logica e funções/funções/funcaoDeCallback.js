function operacoes(a,b,operacao) {
  return operacao(a,b);
};

var multiplicar = function(fator_a,fator_b){
  return fator_a * fator_b;
};

console.log(operacoes(2,3,multiplicar)); 