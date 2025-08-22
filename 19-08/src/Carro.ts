import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    constructor(velocidade:number){
        super(velocidade)
    }

    acelerar(){
        this.velocidade *= 1.1
        console.log(`O carro está andando a ${this.velocidade.toFixed(2)} km/h.`)
    }
}