console.log("Exercício 2");

// Importa a função txtToArray que está no arquivo loadLivros.js
const txtToArray = require("./loadLivros");

const livros = txtToArray();

const resposta = [];

const nomeLivro = process.argv[2];

if (!nomeLivro) {
  console.log("É necessário fornecer o título do livro");
} else {
  let encontrouLivros = false; 
  for (let i = 0; i < livros.length; i++) {
    const livro = livros[i];

    if (livro.titulo === nomeLivro) {
      console.log(`Disciplina: ${livro.disciplina}`);
      
    //   resposta.push(livro);
      encontrouLivros = true;
    }
  }
  if (resposta.length>0){
    console.log(resposta)
  }
  

  if (!encontrouLivros) {
    console.log(`Não existem disciplinas que utilizam o livro ${nomeLivro}`);
  }
  
}


