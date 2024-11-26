function exer5(){
    entrada = document.querySelector("#entrada").value;
    // seta o corpo da div saida
   div = document.querySelector("#saida")
   newp = document.createElement("p")
   newp.innerText = entrada
   div.appendChild(newp)
}