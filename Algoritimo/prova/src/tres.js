console.log("Exercício 3");

// Importa a função txtToArray que está no arquivo loadLivros.js
const txtToArray = require("./loadLivros");

const livros = txtToArray();

const resposta = [];

const nomeAutor = process.argv[2];

if (!nomeAutor) {
  console.log("É necessário fornecer o nome do autor");
} else {
  let encontrouLivros = false;

  for (let i = 0; i < livros.length; i++) {
    const livro = livros[i];

    if (livro.autor.indexOf(nomeAutor) !== -1) {
      resposta.push(livro);
      encontrouLivros = true;

      // Exibe as informações do livro
      console.log(`Disciplina: ${livro.disciplina}`);
      console.log(`Título: ${livro.titulo}`);
      console.log(`Autor: ${livro.autor}`);
      console.log(`Editora: ${livro.editora}`);
      console.log(`Ano: ${livro.ano}`);
      console.log("");  // Linha em branco entre os livros
    }
  }

  if (!encontrouLivros) {
    console.log(`Não existem livros do autor ${nomeAutor}`);
  }
}
