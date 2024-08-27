cont = 0;
sum = 0 ;
  while (cont < 5) {
    num = parseInt(prompt('Entre com o valor maior:> '));
    console.log('Entre com o valor maior:> '+num)
    sum = num + sum ;
    cont += 1;
  }

console.log("Somatoria: "+sum);