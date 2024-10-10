class Endereco {
    constructor(rua, numero) {
        this.rua = rua;
        this.numero = numero;
    }
}
class Pessoa {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Endereço: ${this.rua}, ${this.numero}`);
    }
}


const endereco1 = new Endereco("Rua das Flores", 123);
const pessoa1 = new Pessoa("João Silva", endereco1);


//pessoa1.exibirInformacoes();

pessoa1.exibirInformacoes();

//"Nome: nome, Endereço: rua, número".Exemplo: "Nome: João Silva, Endereço: Rua das Flores, 123".