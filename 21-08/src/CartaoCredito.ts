import { Pagamento } from "./Pagamento";

export class CartaoCredito extends Pagamento {
    processar(): void {
        console.log('Pagamento feito no cartão de crédito.')
    }
}