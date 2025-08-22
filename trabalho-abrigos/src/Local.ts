export class Local {
    // Atributos que podem ser acessados pelas classes filhas
    protected nome: string;
    protected endereco: string;
    protected cidade: string;
    protected telefone: string;
  
    constructor(nome: string, endereco: string, cidade: string, telefone: string) {
      this.nome = nome;
      this.endereco = endereco;
      this.cidade = cidade;
      this.telefone = telefone;
    }
  
    // Método polimórfico que pode ser sobrescrito
    public mostrarInfo(): string {
      return `${this.nome} - ${this.endereco} - ${this.cidade} - ${this.telefone}`;
    }

    public getCidade(): string {
        return this.cidade;
      }
  }
  