function exer4(){
    // entrada = document.querySelector("#entrada").value;
    // seta o corpo da div saida
   entrada = document.createTextNode("Gustavo")
   div = document.querySelector("#saida")
   newp = document.createElement("p")
   newp.appendChild(entrada) 
   div.appendChild(newp)
}