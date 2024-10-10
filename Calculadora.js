function calcular() {
    const expressao = prompt("Digite a expressão (ex: 5 + 3):");
  

    const partes = expressao.split(' ');
    const numero1 = parseFloat(partes[0]);
    const operador = partes[1];
    const numero2 = parseFloat(partes[2]);
  

    if (isNaN(numero1) || isNaN(numero2)) {
      console.log("Entrada inválida: os números devem ser válidos.");
      return;
    }
  
    if (['+', '-', '*', '/'].indexOf(operador) === -1) {
      console.log("Operador inválido. Use +, -, * ou /.");
      return;
    }
  
    let resultado;
    switch (operador) {
      case '+':
        resultado = numero1 + numero2;
        break;
      case '-':
        resultado = numero1 - numero2;
        break;
      case '*':
        resultado = numero1 * numero2;
        break;
      case '/':
        if (numero2 === 0) {
          console.log("Divisão por zero não é permitida.");
          return;
        }
        resultado = numero1 / numero2;
        break;
    }
  
   
    console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);
  }
  
  calcular();