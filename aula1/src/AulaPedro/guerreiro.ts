import { Personagem } from "./rpg";

export class guerreiro extends Personagem {
    constructor(nome:string){
        super(nome,150,20,17,0);
    }
    //método para atacar
    public giroDoPeao(alvo: Personagem){
    const dano = Math.floor(this.forca*(0.8 + Math.random()* 0.4))
    alvo.receberDano(dano)
    }
    
    // Paulada(ataque:number):number{
    //      this.ataque= ataque
    //      const AT = this.ataque * this.forca
    //     return `${this.nome} deu uma paulada com seu pau imenso, com ataquw`
        
    // }
}