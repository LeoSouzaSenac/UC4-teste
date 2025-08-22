import { Local } from "./Local";

export class Abrigo extends Local {
    protected capacidade: number;
    protected vagasOcupadas: number;
  
    constructor(nome: string, endereco: string, cidade: string, telefone: string, capacidade: number) {
      super(nome, endereco, cidade, telefone);
      this.capacidade = capacidade;
      this.vagasOcupadas = 0;
    }
  
    // Método para ocupar vagas
    public ocuparVaga(qtd: number): void {
      if (this.vagasOcupadas + qtd <= this.capacidade) {
        this.vagasOcupadas += qtd;
      } else {
        console.log('Não há vagas suficientes.');
      }
    }
  
    // Sobrescrevendo o método da classe base (polimorfismo)
    public override mostrarInfo(): string {
      return `${this.nome} - ${this.endereco} - ${this.cidade} - ${this.telefone} | Capacidade: ${this.capacidade} | Vagas disponíveis: ${this.capacidade - this.vagasOcupadas}`;
    }
  }
  