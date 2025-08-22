// A classe funciona como um 'molde' para um tipo de dado
// Export permite que importemos depois esta classe em qualquer lugar do meu projeto
// A palavra 'class' indica que isto é uma classe
// Depois de 'class', colocamos o nome da classe, que deve ser EXATAMENTE igual ao nome do arquivo
export class Cachorro {
// Atributos (coisas que objetos desta classe TÊM)
    nome:string;
    raca:string;
    idade:number;

// Construtor da classe (função/método que é chamado AUTOMATICAMENTE quando crio um objeto a partir desta classe). É nele que eu defino os valores que este objeto vai ter para seus atributos.
    constructor(nome:string,raca:string, idade:number){
       // O atributo 'nome' desta classe vai receber como valor o que o usupario digitar (nomeCachorro)
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }


// Métodos (coisas que objetos desta classe FAZEM)
// Não usamos a palavra 'function'
    latir():void{
        console.log(`O cachorro de nome ${this.nome} está latindo.`)
    }    

    correr():void{
        console.log(`O cachorro de raça ${this.raca} está correndo.`)
    }

}