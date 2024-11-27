function exer8(){

    const entrada = document.querySelector("#entrada").value;
   
   if(entrada.length > 0){
        const divSaida = document.querySelector("#saida")


        const title = document.createAttribute("title");
        title.value = entrada;

        let ol = divSaida.querySelector("ol");
        if (!ol) {
            ol = document.createElement("ol");
            divSaida.appendChild(ol);
        }

        const li = document.createElement("li");
        const litext = document.createTextNode(entrada);

        li.setAttributeNode(title);
        li.appendChild(litext);

        ol.appendChild(li);
    }

}