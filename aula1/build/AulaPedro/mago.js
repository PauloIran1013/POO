"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mago = void 0;
// import { guerreiro } from "./guerreiro";
const rpg_1 = require("./rpg");
class mago extends rpg_1.Personagem {
    constructor(nome) {
        super(nome, 85, 8, 20, 30);
    }
    sinsalabim(alvo) {
        const dano = this.getMagia() * 3;
        alvo.receberDano(dano);
    }
    MeteoroDeDesgraça(alvo) {
        const dano = this.getMagia() * 5;
        alvo.receberDano(dano);
    }
    ChuvaAcida(alvo) {
        const dano = this.getMagia() * 1.5;
        alvo.receberDano(dano);
    }
    EscudoMagico(defesaNova) {
        const defesa = this.getDefesa() + 10;
        defesaNova.AumentoDefesaM(defesa);
    }
    mateusComH(alvo) {
        const dano = this.getMagia() * 2;
        alvo.receberDano(dano);
    }
    atacar() {
        return 'Ataque mágico';
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Vida: ${this.getVida()},Força: ${this.forca}, Defesa: ${this.getDefesa()}, Magia: ${this.getMagia()}`);
    }
}
exports.mago = mago;
const mago1 = new mago('Geremilda');
// mago1.exibirInfo()
// mago1.sinsalabim(mago1)
// mago1.exibirInfo()
// mago1.MeteoroDeDesgraça(mago1)
// mago1.exibirInfo()
// mago1.ChuvaAcida(mago1)
// mago1.exibirInfo()
mago1.EscudoMagico(mago1);
mago1.exibirInfo();
console.log(mago1.atacar());
