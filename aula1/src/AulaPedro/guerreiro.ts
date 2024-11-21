import { Personagem } from "./rpg";

export class guerreiro extends Personagem {
    constructor(nome:string){
        super(nome,150,20,17,5);
    }
    //método para atacar
    public giroDoPeao(alvo: Personagem){
    const dano = Math.floor(this.forca*(0.8 + Math.random()* 0.4))
    alvo.receberDano(dano)
    }
    
    public ataqueFurioso(alvo:Personagem){
        const dano = this.getForca() * 1.7
        alvo.receberDano(dano)
    }

    public GarraDoLeão(alvo:Personagem){
        const dano = this.getForca() * 2.5
        alvo.receberDano(dano)
    }

    public MacetadaViolenta(alvo:Personagem){
        const dano = Math.floor(this.forca * (0.1+Math.random()* 0.4))
        alvo.receberDano(dano)
    }

    public Paulada(alvo:Personagem){
    const dano = this.forca* 1.5  
    alvo.receberDano(dano)
        return `${this.nome} deu uma paulada com seu pau imenso, com ataque de ${dano} de dano`
        
    }
    exibirInfo():void{
        console.log(`Nome: ${this.nome}, Vida: ${this.getVida()},Força: ${this.forca}, Defesa: ${this.getDefesa()}, Magia: ${this.getMagia()}`); 
    }
    public atacar(): void {
        return 'Ataque bolado'
    }
}

const guerreiro1 = new guerreiro('Geraldo')
guerreiro1.exibirInfo()
console.log(guerreiro1.Paulada(guerreiro1))
guerreiro1.exibirInfo()