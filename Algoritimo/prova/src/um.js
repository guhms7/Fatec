console.log("Exercício 1");

// Importa a função txtToArray que está no arquivo loadLivros.js
const txtToArray = require("./loadLivros");

const livros = txtToArray();

const resposta = [];

const disciplinaDesejada = process.argv[2];

if (!disciplinaDesejada) {
  console.log("É necessário fornecer o nome da disciplina");
} else {
  let encontrouLivros = false; 
  for (let i = 0; i < livros.length; i++) {
    const livro = livros[i];

    if (livro.disciplina === disciplinaDesejada) {
      console.log(`Disciplina: ${livro.disciplina}`);
      console.log(`Título: ${livro.titulo}`);
      console.log(`Autores: ${livro.autor}`);
      console.log(`Editora: ${livro.editora}`);
      console.log(`Ano: ${livro.ano}`);
      console.log(''); // Linha em branco entre os livros

      resposta.push(livro);
      encontrouLivros = true;
    }
  }
  if (resposta.length>0){
    console.log(resposta)
  }
  

  if (!encontrouLivros) {
    console.log(`Não existem livros da disciplina ${disciplinaDesejada}`);
  }
  
}


