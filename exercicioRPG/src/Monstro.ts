import { Personagem } from "./Personagem";

export class Monstro {
    private nome:string;
    private vida:number;
    private forca:number;

    constructor(nome:string,vida:number,forca:number){
        this.nome = nome
        this.vida = vida
        this.forca = forca
    }

    atacar(oponente:Personagem){
        oponente.dano(this)
    }

    dano(oponente:Personagem){
        this.vida -= oponente.getForca() 
    }

 

    
	public getNome(): string {
		return this.nome;
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

    
	public setVida(value: number) {
		this.vida = value;
	}

   
	public setForca(value: number) {
		this.forca = value;
	}

    
}