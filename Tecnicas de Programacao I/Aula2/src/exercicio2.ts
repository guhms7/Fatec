//Criar uma instância da classe Retangulo e, na sequência, imprimir no terminal o valor da área e perímetro usando os métodos correspondentes.
class Retangulo {
  base: number;
  altura: number;
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
  area(): number {
    return this.base * this.altura;
  }
  perimetro(): number {
    return 2 * this.base + 2 * this.altura;
  }

  print():void{
    console.log(`Area ${this.area()} /n Perimetro ${this.perimetro()}`);
  }

}


const retangulo = new Retangulo(10,5);
retangulo.print();