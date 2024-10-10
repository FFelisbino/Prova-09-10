class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  }
  
  class ItemPedido {
    constructor(produto, quantidade) {
      this.produto = produto;
      this.quantidade = quantidade;
    }
  }
  
  class FormaPagamento {
    constructor(tipo) {
      this.tipo = tipo;
    }
  }
  
  class Pedido {
    constructor() {
      this.itens = [];
      this.formaPagamento = null;
    }
  
    addItem(item) {
      this.itens.push(item);
    }
  
    setFormaPagamento(formaPagamento) {
      this.formaPagamento = formaPagamento;
    }
  
    calcularTotal() {
      let total = 0;
      for (const item of this.itens) {
        total += item.produto.preco * item.quantidade;
      }
      return total;
    }
  }
  

  const produto1 = new Produto('Maçã', 2.5, 10);
  const produto2 = new Produto('Banana', 1.99, 20);
  
  const item1 = new ItemPedido(produto1, 3);
  const item2 = new ItemPedido(produto2, 2);
  
  const pedido = new Pedido();
  pedido.addItem(item1);
  pedido.addItem(item2);
  pedido.setFormaPagamento(new FormaPagamento('cartão'));
  
  console.log("Total do pedido:", pedido.calcularTotal());