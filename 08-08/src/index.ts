import * as readline from 'readline-sync';

// Funções das operações matemáticas
function somar(a: number, b: number): number {
  return a + b;
}

function subtrair(a: number, b: number): number {
  return a - b;
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

function dividir(a: number, b: number): number {
  if (b === 0) {
    console.log("❌ Não é possível dividir por zero.");
   
  }
  return a / b;
}

// Variável para controle do menu
let opcao: number = 0;

while (opcao !== 5) {
  console.log("\n=== CALCULADORA ===");
  console.log("1 - Somar");
  console.log("2 - Subtrair");
  console.log("3 - Multiplicar");
  console.log("4 - Dividir");
  console.log("5 - Sair");

  opcao = Number(readline.question("Escolha uma opção: "));

  if (opcao >= 1 && opcao <= 4) {
    const num1 = Number(readline.question("Digite o primeiro número: "));
    const num2 = Number(readline.question("Digite o segundo número: "));
    let resultado: number;

    switch (opcao) {
      case 1:
        resultado = somar(num1, num2);
        console.log(`Resultado: ${resultado}`);
        break;

      case 2:
        resultado = subtrair(num1, num2);
        console.log(`Resultado: ${resultado}`);
        break;

      case 3:
        resultado = multiplicar(num1, num2);
        console.log(`Resultado: ${resultado}`);
        break;

      case 4:
        resultado = dividir(num1, num2);
       
        console.log(`Resultado: ${resultado}`);
        
        break;
    }
  } else if (opcao === 5) {
    console.log("👋 Programa encerrado. Até mais!");
  } else {
    console.log("❌ Opção inválida. Tente novamente.");
  }
}
