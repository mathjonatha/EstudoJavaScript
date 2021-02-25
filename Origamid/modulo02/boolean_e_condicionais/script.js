// Objetos

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#ffffff',
}


var bg = menu.backgroundColor; // adiciona a uma variavel

menu.width = 500; // altera um valor no objeto SET

menu.color = '#f3ff22'; // adiciona um nova propriedade ao objego GET


var dadosPessoais = {
    primeiroNome: 'Matheus',
    segundoNome: 'Jonatha',
    cidade: 'Natal',
    idade: 24,
}

dadosPessoais.primeiroNome = 'Gabriel';

dadosPessoais.nomeCompleto = function(){
    return `${this.primeiroNome} ${this.segundoNome}`;
}



cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir(pessoa){
      if(pessoa === 'homem'){
          return 'Latindo';
      } else if(pessoa === 'mulher'){ 
            return 'Não latindo';
      } else {
          return 'Digite apenas em minusculo, sendo homem ou mulher';
      }
    },
}

var sub = cachorro.raca = cachorro.raca.replace('or','doremi');

console.log(sub);