export class Calculadora {
    //Atributos
    numeroUm:number
    numeroDois:number

    //Construtor
    constructor(numeroUm:number, numeroDois:number){
        this.numeroUm = numeroUm
        this.numeroDois = numeroDois
    }

    //Métodos
    somar():number{
        return this.numeroUm + this.numeroDois
    }

    subtrair():number{
        return this.numeroUm - this.numeroDois
    }

    multiplicar():number{
        return this.numeroUm * this.numeroDois
    }

    dividir ():number {
        if (this.numeroDois != 0) {return this.numeroUm / this.numeroDois}
        return NaN
    }
}