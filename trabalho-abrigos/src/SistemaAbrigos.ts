import readlineSync from 'readline-sync';
import { Abrigo } from './Abrigo';

export class SistemaAbrigos {
  private abrigos: Abrigo[];

  constructor() {
    this.abrigos = [];
  }

  // Cadastro de abrigo
  public cadastrarAbrigo(): void {
    const nome = readlineSync.question('Nome do abrigo: ');
    const endereco = readlineSync.question('Endereço: ');
    const cidade = readlineSync.question('Cidade: ');
    const telefone = readlineSync.question('Telefone: ');
    const capacidade = parseInt(readlineSync.question('Capacidade: '), 10);

    const abrigo = new Abrigo(nome, endereco, cidade, telefone, capacidade);
    this.abrigos.push(abrigo);

    console.log('Abrigo cadastrado com sucesso!\n');
  }

  // Listagem de abrigos
  public listarAbrigos(): void {
    if (this.abrigos.length === 0) {
      console.log('Nenhum abrigo cadastrado.\n');
      return;
    }

    console.log('--------------------');
    console.log('LISTAGEM DE ABRIGOS:');
    console.log('--------------------');
    console.log('CÓD | NOME - ENDEREÇO - CIDADE - TELEFONE | CAPACIDADE | VAGAS DISP');

    this.abrigos.forEach((abrigo, index) => {
      console.log(`${String(index + 1).padStart(3, '0')} | ${abrigo.mostrarInfo()}`);
    });

    console.log('--------------------\n');
  }

  // Procurar abrigo por cidade
  public procurarAbrigos(): void {
    const cidade = readlineSync.question('Qual cidade você está? ');
    const encontrados = this.abrigos.filter(
        a => a.getCidade().toLowerCase() === cidade.toLowerCase()
      );

    if (encontrados.length === 0) {
      console.log('Nenhum abrigo encontrado nesta cidade.\n');
      return;
    }

    console.log('--------------------');
    console.log('LISTAGEM DE ABRIGOS:');
    console.log('--------------------');

    encontrados.forEach((abrigo, index) => {
      console.log(`${String(index + 1).padStart(3, '0')} | ${abrigo.mostrarInfo()}`);
    });

    console.log('--------------------\n');
  }
}
