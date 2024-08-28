console.log("Vamos calcular o seu IMC");
peso  = prompt("Entre com seu peso: ");
altura  = prompt("Entre com sua altura: ");
p = parseFloat(peso);
a = parseFloat(altura);
imc= p/(a*a);
console.log(imc);