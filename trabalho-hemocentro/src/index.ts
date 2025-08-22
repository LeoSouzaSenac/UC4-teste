import { SistemaHemocentro } from "./SistemaHemocentro";
import readlineSync from 'readline-sync';

function main() {
    const sistema = new SistemaHemocentro();
    let opcao = '';
  
    do {
      console.log('===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====');
      console.log('1. Cadastrar doador');
      console.log('2. Listar doadores');
      console.log('3. Buscar doador por tipo sanguíneo');
      console.log('4. Buscar doador por data da última doação');
      console.log('5. Sair');
      opcao = readlineSync.question('Escolha uma opção: ');
  
      switch (opcao) {
        case '1':
          sistema.cadastrarDoador();
          break;
        case '2':
          sistema.listarDoadores();
          break;
        case '3':
          sistema.buscarPorTipoSanguineo();
          break;
        case '4':
          sistema.buscarPorDataUltimaDoacao();
          break;
        case '5':
          console.log('Saindo...');
          break;
        default:
          console.log('Opção inválida!');
      }
    } while (opcao !== '5');
  }
  
  main();
  