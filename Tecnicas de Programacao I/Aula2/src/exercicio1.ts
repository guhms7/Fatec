// Criar duas instancias da classe Filme usando os seguintes valores e, na sequencia chamar o método print para exibir o resultado no terminal
// Filme 1: Titulo: "De volta para o futuro", Duração: 116
// Filme 2: Titulo: "Matrix", Duração: 136

class Filme{
    titulo:string;
    duracao: number;

    constructor(titulo: string, duracao: number){
        this.titulo = titulo;
        this.duracao = duracao;
    }
    print():void{
        console.log(`O filme ${this.titulo}, possui ${this.duracao}min.`)
    }
}


const filme1 = new Filme("De volta para o futuro", 116);
filme1.print()
const filme2 = new Filme("Matrix",136)
filme2.print()