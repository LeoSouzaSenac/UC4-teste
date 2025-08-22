export class Pessoa {
    protected nome: string;
    protected idade: number;
    protected peso: number;
  
    constructor(nome: string, idade: number, peso: number) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
    }
  
    // Método polimórfico, pode ser sobrescrito pelas subclasses
    public mostrarInfo(): string {
      return `${this.nome} | ${this.idade} | ${this.peso}`;
    }
  
    public getNome(): string {
      return this.nome;
    }
  }
  