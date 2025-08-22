import { Animal } from "./Animal";

export class Crocodile extends Animal {
    
    constructor (name:string,weight:number) {
     super(name,weight)   
    }

    swim():void {
        console.log(`${this.name} is swiming.`)
    }
}