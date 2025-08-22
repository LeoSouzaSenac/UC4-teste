export class ContaBancaria {
    protected saldo:number

    constructor(saldo:number){
        this.saldo = saldo
    }
    
    protected atualizarSaldo(valor:number):void{
        this.saldo += valor
    }
}
