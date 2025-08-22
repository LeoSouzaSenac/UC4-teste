import { Pacote } from "./Pacote"

export class Entregador {
    private nome:string

    constructor(nome:string) {
      this.nome = nome
    }

    // Método que recebe um objeto do tipo Pacote e acessa sua propriedade
    entregarPacote(pacote:Pacote) {
      console.log(`${this.nome} está entregando um pacote de ${pacote.getPeso()}kg para ${pacote.getDestino()}.`)
      
    }

    // Método que recebe um objeto do tipo Pacote e altera sua propriedade
    trocarEndereco(pacote:Pacote, novoEndereco:string){
      pacote.setDestino(novoEndereco)
      console.log(`O novo endereço é ${novoEndereco}.`)
    }

    

    
  }