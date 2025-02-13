console.log("Exercício 4");

const txtToArray = require("./loadLivros");

const livros = txtToArray();

let livroMaisExtenso = null;

for (let i = 0; i < livros.length; i++) {
  const livro = livros[i];

  if (!livroMaisExtenso || livro.titulo.length > livroMaisExtenso.titulo.length) {
    livroMaisExtenso = livro;
  }
}

if (livroMaisExtenso) {
  console.log("Livro com o título mais extenso:");
  console.log(`Disciplina: ${livroMaisExtenso.disciplina}`);
  console.log(`Título: ${livroMaisExtenso.titulo}`);
  console.log(`Autor: ${livroMaisExtenso.autor}`);
  console.log(`Editora: ${livroMaisExtenso.editora}`);
  console.log(`Ano: ${livroMaisExtenso.ano}`);
} else {
  console.log("Não foi possível encontrar livros.");
}
