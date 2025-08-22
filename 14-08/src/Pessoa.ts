export class Pessoa {
    private nome: string
    private idade: number

    constructor(nome:string, idade:number) {
        this.nome = nome
        this.idade = idade
    }

    apresentar(): string {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
      }

    // Getter - Método que "pega" o valor
    getNome():string{
        return this.nome
    }
    // Setter - Método que "define" o valor
    setNome(novoNome:string):void{
        // O atributo nome vai receber um novo valor
        this.nome = novoNome
    }

    // Criem os getters e setters para idade
    // Impeça que uma idade possa ser negativa
    getIdade():number{
        return this.idade
    }

    setIdade(novaIdade:number):void {
        if (novaIdade >= 0) {this.idade = novaIdade}
        else {console.log("A idade não pode ser negativa!")}
    }
}