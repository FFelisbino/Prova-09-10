class Funcionario {
    constructor(id, nome, alocacao) {
      this.id = id;
      this.nome = nome;
      this.alocacao = alocacao;
    }
  
    calculaSalario() {
      return 2000;
    }
  
    info() {
      return `Funcionário: ${this.nome} (ID: ${this.id}) - Alocação: ${this.alocacao} - Salário: R$ ${this.calculaSalario()}`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(id, nome, alocacao, quantidadeDeSubordinados) {
      super(id, nome, alocacao);
      this.quantidadeDeSubordinados = quantidadeDeSubordinados;
    }
  
    calculaSalario() {
      return super.calculaSalario() * 1.4; // Adiciona 40% de bonificação
    }
  }
  

  const funcionario = new Funcionario(1, 'João da Silva', 'TI');
  const gerente = new Gerente(2, 'Maria Souza', 'Gestão', 10);
  
  console.log(funcionario.info());
  console.log(gerente.info());