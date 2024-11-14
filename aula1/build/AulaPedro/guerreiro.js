"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guerreiro = void 0;
const rpg_1 = require("./rpg");
class guerreiro extends rpg_1.Personagem {
    constructor(nome) {
        super(nome, 150, 20, 17, 0);
    }
    //método para atacar
    giroDoPeao(alvo) {
        const dano = Math.floor(this.forca * (0.8 + Math.random() * 0.4));
        alvo.receberDano(dano);
    }
}
exports.guerreiro = guerreiro;
