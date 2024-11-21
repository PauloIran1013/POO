// import { guerreiro } from "./guerreiro";
import { Personagem } from "./rpg";

export class mago extends Personagem {
constructor(nome:string){
    super(nome,85,8,20,30);
}

public sinsalabim(alvo:Personagem){
    const dano = this.getMagia() * 3
    alvo.receberDano(dano);
}

public MeteoroDeDesgraça(alvo:Personagem){
    const dano = this.getMagia() * 5
    alvo.receberDano(dano);
}

public ChuvaAcida(alvo:Personagem){
    const dano = this.getMagia() * 1.5
    alvo.receberDano(dano);
}

public EscudoMagico(defesaNova:Personagem){
    const defesa = this.getDefesa() + 10
    defesaNova.AumentoDefesaM(defesa)
}

public mateusComH(alvo:Personagem){
    const dano = this.getMagia() * 2
    alvo.receberDano(dano);
}

exibirInfo():void{
    console.log(`Nome: ${this.nome}, Vida: ${this.getVida()},Força: ${this.forca}, Defesa: ${this.getDefesa()}, Magia: ${this.getMagia()}`); 
}



}
const mago1 = new mago ('Geremilda')
// mago1.exibirInfo()
// mago1.sinsalabim(mago1)
// mago1.exibirInfo()
// mago1.MeteoroDeDesgraça(mago1)
// mago1.exibirInfo()
// mago1.ChuvaAcida(mago1)
// mago1.exibirInfo()
mago1.EscudoMagico(mago1)
mago1.exibirInfo()

