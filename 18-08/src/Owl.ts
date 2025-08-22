import { Animal } from "./Animal";

export class Owl extends Animal {

    constructor(name:string, weight:number) {
        // O método 'super()' chama o construtor da classe pai
        // Assim, reutilizamos ele na classe filha
        super(name, weight)
    }

    fly():void{
        console.log(`${this.name} is flying.`)
    }
}