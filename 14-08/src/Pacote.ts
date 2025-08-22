export class Pacote {
    private destino: string;
    private peso: number;
  
    constructor(destino: string, peso: number) {
      this.destino = destino;
      this.peso = peso;
    }

    getDestino():string {
      return this.destino
    }

    getPeso():number{
      return this.peso
    }

    setDestino(novoDestino:string):void{
      this.destino = novoDestino
    }
    
    setPeso(novoPeso:number):void{
      this.peso = novoPeso
    }
  }