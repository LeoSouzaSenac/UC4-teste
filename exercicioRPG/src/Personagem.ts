import { Monstro } from "./Monstro";

export class Personagem {
    private nome:string;
    private classe:string;
    private vida:number;
    private forca:number;
    private vidaMaxima:number;

    constructor(nome:string,classe:string,vida:number,forca:number){
        this.nome = nome
        this.classe = classe
        this.vida = vida
        this.forca = forca
        this.vidaMaxima = vida
    }

    atacar(oponente:Monstro){
        // chama o método dano DO MONSTRO, passando este personagem como parâmetro
        oponente.dano(this)
        
    }

    dano(oponente:Monstro){
        // Pega a vida do personagem e diminui dela a força do monstro
        this.vida -= oponente.getForca() 
    }

    curar(valor: number) {
        this.vida += valor;
        if (this.vida > this.vidaMaxima) {
            this.vida = this.vidaMaxima;
        }
    }

    
	public getNome(): string {
		return this.nome;
	}

    
	public getClasse(): string {
		return this.classe;
	}

    
	public getVida(): number {
		return this.vida;
	}

    
	public getForca(): number {
		return this.forca;
	}

    
	public setNome(value: string) {
		this.nome = value;
	}

    
	public setClasse(value: string) {
		this.classe = value;
	}

    
	public setVida(value: number) {
		this.vida = value;
	}

   
	public setForca(value: number) {
		this.forca = value;
	}

    
}