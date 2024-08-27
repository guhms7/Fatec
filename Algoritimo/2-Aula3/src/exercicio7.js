cont = 0;
atual = 0;
  while (cont < 5) {
    num = parseInt(prompt('Entre com o numero:> '));
    cont += 1;
    if(atual<num){
      atual = num
    }

  }

console.log("Maior numero é : "+atual);