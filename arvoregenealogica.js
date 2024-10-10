class Pessoa {
    constructor(nome, idade, pai, mae) {
      this.nome = nome;
      this.idade = idade;
      this.pai = pai;
      this.mae = mae;
    }
  
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, idade: ${this.idade}, pai: ${this.pai.nome}, mãe: ${this.mae.nome}`);
    }
  }
  
  const pai = new Pessoa("Pedro", 50);
  const mãe = new Pessoa("Ana", 48);
  const filho = new Pessoa("Lucas", 25, pai, mãe);
  
  filho.exibirInformacoes();