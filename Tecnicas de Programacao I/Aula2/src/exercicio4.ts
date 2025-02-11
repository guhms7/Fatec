//Criar duas instâncias da classe Carro usando os seguintes valores e, na sequência, chamar o método print para exibir o resultado no terminal
//Carro1 Modelo: Gol, Marca: VW
//carro2 Modelo Uno, Marca: Fiat

class Carro {
  marca: string = "";
  modelo: string = "";
  setMarca(marca: string): void {
    this.marca = marca;
  }
  setModelo(modelo: string): void {
    this.modelo = modelo;
  }
  print(): void {
    console.log(`${this.marca} ${this.modelo}`);
  }
}


const c1 = new Carro();
c1.setMarca("VW");
c1.setModelo("Gol");
c1.print();

const c2 = new Carro();
c2.setMarca("Fiat");
c2.setModelo("Uno");
c2.print()