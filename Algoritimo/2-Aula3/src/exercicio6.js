cont = 0;
atual = Infinity;
  while (cont < 5) {
    num = parseInt(prompt('Entre com o numero:> '));
    cont += 1;
    if(atual>num){
      atual = num
    }

  }

console.log("Menor numero é : "+atual);