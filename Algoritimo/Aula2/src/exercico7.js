entradaNum1 = prompt("Entre com o numero");
entradaNum2 = prompt("Entre com o numero 2");
entradaNum3 = prompt("Entre com o numero 2");

nmr1 = parseFloat(entradaNum1);
nmr2 = parseFloat(entradaNum2);
nmr3 = parseFloat(entradaNum3);

if (nmr1>nmr2 && nmr1>nmr3){
    console.log(nmr1+ "É maior");
}else if(nmr2>nmr1&&nmr2>nmr3){
    console.log(nmr2+" É maior")
}else{
    console.log(nmr3+" É maior")
}
