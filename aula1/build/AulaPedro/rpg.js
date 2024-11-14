"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    nome;
    vida;
    forca;
    defesa;
    magia;
    constructor(nome, vida, forca, defesa, magia) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.magia = magia;
    }
    getNome() {
        return this.nome;
    }
    getVida() {
        return this.vida;
    }
    setVida(novaVida) {
        this.vida = novaVida < 0 ? 0 : novaVida;
    }
    getForca() {
        return this.forca;
    }
    getDefesa() {
        return this.defesa;
    }
    getMagia() {
        return this.magia;
    }
    // método para aplicar dano, diminuindo a vida do personagem
    receberDano(dano) {
        this.setVida(this.vida - dano);
        return `${this.nome} recebeu ${dano} de dano e agora tem ${this.vida} de vida.`;
    }
}
exports.Personagem = Personagem;
const personagem = new Personagem('Cleiton', 100, 35, 17, 0);