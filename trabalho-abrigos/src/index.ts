import { SistemaAbrigos } from "./SistemaAbrigos";
import readlineSync from 'readline-sync';

function main() {
    const sistema = new SistemaAbrigos();
    let opcao = '';
  
    do {
      console.log('===== ABRIGOS TEMPORÁRIOS =====');
      console.log('1. Cadastrar abrigo');
      console.log('2. Listar abrigos');
      console.log('3. Procurar abrigo');
      console.log('4. Sair');
      opcao = readlineSync.question('Escolha uma opção: ');
  
      switch (opcao) {
        case '1':
          sistema.cadastrarAbrigo();
          break;
        case '2':
          sistema.listarAbrigos();
          break;
        case '3':
          sistema.procurarAbrigos();
          break;
        case '4':
          console.log('Saindo...');
          break;
        default:
          console.log('Opção inválida!');
      }
    } while (opcao !== '4');
  }
  
  main();
  