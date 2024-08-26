p = prompt("Entre com seu peso");
a = prompt("Entre com sua altura")
peso = parseFloat(p);
altura = parseFloat(a);

imc = peso / (altura * altura)

if (imc > 40)
    console.log("Obesidade III (Mórbida)");
else if (imc <= 39.9 && imc >= 35.0) {
    console.log("Obesidade II (severa)");
} else if (imc <= 34.9 && imc >= 30.0) {
    console.log("Obesidade I");
} else if (imc <= 29.9 && imc >= 25.0) {
    console.log("Levemente acima do peso")
} else if (imc <= 24.9 && imc > 18.6) {
    console.log("Peso Ideal (Uhuul)");
} else if (imc <= 18.5) {
    console.log("Tem que come veinho");
} else {
    console.log("Nao to te entendendo")
}
