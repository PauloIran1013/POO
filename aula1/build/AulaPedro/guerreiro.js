"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guerreiro = void 0;
const rpg_1 = require("./rpg");
class guerreiro extends rpg_1.Personagem {
    constructor(nome) {
        super(nome, 150, 20, 17, 5);
    }
    //método para atacar
    giroDoPeao(alvo) {
        const dano = Math.floor(this.forca * (0.8 + Math.random() * 0.4));
        alvo.receberDano(dano);
    }
    ataqueFurioso(alvo) {
        const dano = this.getForca() * 1.7;
        alvo.receberDano(dano);
    }
    GarraDoLeão(alvo) {
        const dano = this.getForca() * 2.5;
        alvo.receberDano(dano);
    }
    MacetadaViolenta(alvo) {
        const dano = Math.floor(this.forca * (0.1 + Math.random() * 0.4));
        alvo.receberDano(dano);
    }
    Paulada(alvo) {
        const dano = this.forca * 1.5;
        alvo.receberDano(dano);
        return `${this.nome} deu uma paulada com seu pau imenso, com ataque de ${dano} de dano`;
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Vida: ${this.getVida()},Força: ${this.forca}, Defesa: ${this.getDefesa()}, Magia: ${this.getMagia()}`);
    }
}
exports.guerreiro = guerreiro;
const guerreiro1 = new guerreiro('Geraldo');
guerreiro1.exibirInfo();
console.log(guerreiro1.Paulada(guerreiro1));
guerreiro1.exibirInfo();
