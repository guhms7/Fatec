password = prompt('Entre com uma senha :> ');
confirmation = prompt('Confirme a senha :> ');
cont = 0

if (password == confirmation) {
    alert("Sucesso")
  } else {
    while (password != confirmation && cont <3) {
      alert("Senha incorreta")
      cont+=1
      confirmation = prompt('Confirme a senha novamente :> ');
      if (password == confirmation) {
        alert("Sucesso")
      }
    }
    alert("Excesso de tentativa")
  }
