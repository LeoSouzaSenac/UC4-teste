import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Carro } from "./Carro";
import { CartaoCredito } from "./CartaoCredito";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";

// 1
const meuCarro:Carro = new Carro()
const minhaBike:Bicicleta = new Bicicleta()
const veiculos:Veiculo[] = [meuCarro,minhaBike]
for (let veiculo of veiculos){
    veiculo.mover()
}
//2
const pagamentos:Pagamento[] = [new CartaoCredito(), new Boleto()]
for (let pagamento of pagamentos) {
    pagamento.processar()
}
