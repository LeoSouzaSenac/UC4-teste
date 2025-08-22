import { Entregador } from "./Entregador";
import { Pacote } from "./Pacote";


const entregador:Entregador = new Entregador("Bob")
const pacote:Pacote = new Pacote("Novo Hamburgo", 5)

entregador.trocarEndereco(pacote,"São Leopoldo")
entregador.entregarPacote(pacote)

