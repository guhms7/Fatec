password = prompt('Entre com uma senha :> ');
confirmation = prompt('Confirme a senha :> ');
if (password == confirmation) {
  alert("Sucesso")
} else {
  while (password != confirmation) {
    alert("Senha incorreta")
    confirmation = prompt('Confirme a senha novamente :> ');
    if (password == confirmation) {
      alert("Sucesso")
    }
  }
}
