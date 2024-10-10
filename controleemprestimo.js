class Emprestimo {
    constructor(Data, Hora) {
        this.Data = Data;
        this.Hora = Hora;
    }
}
class Livro {
    constructor(Titulo, Autor) {
        this.Titulo = Titulo;
        this.Autor = Autor;
    }
}
class Pessoa {
    constructor(Nome, Endereco) {
        this.Nome = Nome;
        this.Endereco = Endereco;
    }
    exibirInformacoes() {
      console.log(`Livro: ${this.emprestimo1}, autor: ${this.Autor}, emprestado para: ${this.Nome}, endereço: ${this.Endereco} ás : ${this.Hora} hrs, na data: ${this.Data}`);
    }  
} 
const emprestimo1 = new Emprestimo("09/10/2024", "21:00");
const livro1 = new Livro("Pequeno principe", "Antonie");
const pessoa1 = new Pessoa("Eduardo Silva", "Rua B, n° 28, Alegria velha Resende RJ");