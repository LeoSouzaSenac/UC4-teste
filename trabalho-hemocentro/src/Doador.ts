import { Pessoa } from "./Pessoa";

export class Doador extends Pessoa {
    protected tipoSanguineo: string;
    protected dataUltimaDoacao: string;
  
    constructor(
      nome: string,
      idade: number,
      peso: number,
      tipoSanguineo: string,
      dataUltimaDoacao: string
    ) {
      super(nome, idade, peso);
      this.tipoSanguineo = tipoSanguineo;
      this.dataUltimaDoacao = dataUltimaDoacao;
    }
  
    // Sobrescrevendo método polimórfico para exibir todas as informações do doador
    public override mostrarInfo(): string {
      return `${this.nome.padEnd(15)} | ${String(this.idade).padStart(3)} | ${String(this.peso).padStart(3)} | ${this.tipoSanguineo.padEnd(6)} | ${this.dataUltimaDoacao}`;
    }
  
    public getTipoSanguineo(): string {
      return this.tipoSanguineo;
    }
  
    public getDataUltimaDoacao(): string {
      return this.dataUltimaDoacao;
    }
  }
  