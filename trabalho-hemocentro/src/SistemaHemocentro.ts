import readlineSync from 'readline-sync';
import { Doador } from './Doador';

export class SistemaHemocentro {
  private doadores: Doador[];

  constructor() {
    this.doadores = [];
  }

  // Cadastro de doador
  public cadastrarDoador(): void {
    const nome = readlineSync.question('Nome: ');
    const idade = parseInt(readlineSync.question('Idade: '), 10);
    const peso = parseInt(readlineSync.question('Peso: '), 10);
    const tipoSanguineo = readlineSync.question('Tipo sanguíneo: ');
    const dataUltimaDoacao = readlineSync.question('Data da última doação (dd/mm/aaaa): ');

    const doador = new Doador(nome, idade, peso, tipoSanguineo, dataUltimaDoacao);
    this.doadores.push(doador);

    console.log('Doador cadastrado com sucesso!\n');
  }

  // Listagem de todos os doadores
  public listarDoadores(): void {
    if (this.doadores.length === 0) {
      console.log('Nenhum doador cadastrado.\n');
      return;
    }

    console.log('--------------------');
    console.log('LISTAGEM DE DOADORES:');
    console.log('--------------------');
    console.log('NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO');
    console.log('-----------------------------------------------------------------');

    this.doadores.forEach(d => console.log(d.mostrarInfo()));

    console.log('-----------------------------------------------------------------\n');
  }

  // Buscar doadores por tipo sanguíneo
  public buscarPorTipoSanguineo(): void {
    const tipo = readlineSync.question('Digite o tipo sanguíneo desejado: ');

    const encontrados = this.doadores.filter(
      d => d.getTipoSanguineo().toUpperCase() === tipo.toUpperCase()
    );

    if (encontrados.length === 0) {
      console.log('Nenhum doador encontrado com esse tipo sanguíneo.\n');
      return;
    }

    console.log('------------------------');
    console.log('RESULTADO DA BUSCA:');
    console.log('------------------------');
    console.log('NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO');
    console.log('-----------------------------------------------------------------');

    encontrados.forEach(d => console.log(d.mostrarInfo()));

    console.log('-----------------------------------------------------------------\n');
  }

  // Buscar doadores por data da última doação
  public buscarPorDataUltimaDoacao(): void {
    const dataLimite = readlineSync.question('Digite a data desejada (dd/mm/aaaa): ');

    const encontrados = this.doadores.filter(d => {
      const [dia, mes, ano] = d.getDataUltimaDoacao().split('/').map(Number);
      const [diaLim, mesLim, anoLim] = dataLimite.split('/').map(Number);
      const dataDoador = new Date(ano, mes - 1, dia);
      const dataMax = new Date(anoLim, mesLim - 1, diaLim);
      return dataDoador <= dataMax;
    });

    if (encontrados.length === 0) {
      console.log('Nenhum doador encontrado antes desta data.\n');
      return;
    }

    console.log('------------------------');
    console.log('RESULTADO DA BUSCA:');
    console.log('------------------------');
    console.log('NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO');
    console.log('-----------------------------------------------------------------');

    encontrados.forEach(d => console.log(d.mostrarInfo()));

    console.log('-----------------------------------------------------------------\n');
  }
}
