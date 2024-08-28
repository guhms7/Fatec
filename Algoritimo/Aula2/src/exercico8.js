entradaNum1 = prompt("Entre com a sua temperatura");
nmr1 = parseFloat(entradaNum1);


if (nmr1>41){
    console.log("Hipertermia");

}else if(nmr1<=41&&nmr1>=39.6){
    console.log("Febre alta");
}else if(nmr1<=39.5&&nmr1>=37.8){
    console.log("Febre");
}else if(nmr1<=37.7&&nmr1>=35.1){
    console.log("Normal")
}else if(nmr1<=35){
    console.log("Hipotermia");
}

