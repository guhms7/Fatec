function exer6(){
    entrada = document.querySelector("#entrada").value;
    // seta o corpo da div saida
   divSaida = document.querySelector("#saida")
   newp = document.createElement("p")
   addtitle = document.createAttribute("title")
   addtitle.value = "Nome fornecido"
   newp.setAttributeNode(addtitle)
   newp.innerText = entrada
   divSaida.appendChild(newp)
}