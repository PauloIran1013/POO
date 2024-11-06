"use strict";
class Personagem {
    nome;
    vida;
    energia;
    ataque;
    defesa;
    raca;
    classe;
    stamina;
    mana;
    powerAttack;
    intelecto;
    armor;
    constructor(nome, vida, energia, ataque, defesa, raca, classe, stamina, mana, powerAttack, intelecto, armor) {
        this.nome = nome;
        this.vida = vida;
        this.energia = energia;
        this.ataque = ataque;
        this.defesa = defesa;
        this.raca = raca;
        this.classe = classe;
        this.stamina = stamina;
        this.mana = mana;
        this.powerAttack = powerAttack;
        this.intelecto = intelecto;
        this.armor = armor;
    }
    personagemInfo() {
        console.log(`Nome:${this.nome};
            Energia:${this.energia};
            Vida:${this.vida};
            Ataque:${this.ataque};
            Defesa:${this.defesa};
            Raça:${this.raca};
            Classe:${this.classe};
            Stamina:${this.stamina};
            Mana:${this.mana};
            Poder de ataque:${this.powerAttack};
            Intelecto:${this.intelecto};
            Armadura:${this.armor}`);
    }
    atacar() {
        console.log(`${this.nome} esta andando em uma floresta quando derrepente aparece dinossauro`);
        console.log(`Informações sobre o dinosauro: Vida:100; Poder de ataque:10`);
        const D = 100 - this.powerAttack;
        const vd = 100 - D;
        console.log(`O dinossauro sofreu ${D} de dano`);
        console.log(`Vida atual do dinossauro: ${vd}`);
    }
    danoSofrido() {
        console.log(`O dinossauro ataca o ${this.nome}`);
        console.log(`O personagem ${this.nome} sofreu 10 de dano`);
        const danoSofrido = this.vida - 10;
        console.log(`Vida atual ${danoSofrido}`);
    }
}
const guerreiro = new Personagem("Arthas", 150, 120, 30, 20, "Humano", "Guerreiro", 80, 50, 60, 25, 15);
guerreiro.personagemInfo();
guerreiro.atacar();
guerreiro.danoSofrido();
