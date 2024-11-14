"use strict";
class Animais {
    peso;
    idade;
    sexo;
    constructor(peso, idade, sexo) {
        this.peso = peso;
        this.sexo = sexo;
        this.idade = idade;
    }
    Aniversario() {
        this.idade += 1;
        console.log(`Agora a idade é: ${this.idade} anos`);
    }
}
class Peixe extends Animais {
    escamas;
    constructor(peso, idade, sexo, escamas) {
        super(peso, idade, sexo);
        this.escamas = escamas;
    }
    movimentar() {
        console.log("O peixe está nadando");
    }
    comer() {
        this.peso *= 1.05;
        console.log(`Peso do peixe após a refeição: ${this.peso.toFixed(2)}Kg`);
    }
}
class Cachorro extends Animais {
    nome;
    pedigree;
    constructor(nome, idade, sexo, pedigree, peso) {
        super(peso, idade, sexo);
        this.nome = nome;
        this.pedigree = pedigree;
    }
    latir() {
        console.log("AU AU AU AU AU AU AU AU AU AU!!!");
    }
    comer() {
        this.peso *= 1.10;
        console.log(`Peso do ${this.nome} após a refeição: ${this.peso.toFixed(2)}Kg`);
    }
    movimentar() {
        console.log("O cachorro está correndo");
    }
}
class Gato extends Animais {
    nome;
    pedigree;
    constructor(nome, idade, sexo, pedigree, peso) {
        super(peso, idade, sexo);
        this.nome = nome;
        this.pedigree = pedigree;
    }
    Miar() {
        console.log("Miauuuuu!");
    }
    comer() {
        this.peso *= 1.05; // Aumenta o peso em 5%
        console.log(`Peso do ${this.nome} após a refeição: ${this.peso.toFixed(2)}Kg`);
    }
    movimentar() {
        console.log("O gato está praticando parkour");
    }
}
class Gamba extends Animais {
    nivelAroma;
    constructor(peso, idade, sexo, nivelAroma) {
        super(peso, idade, sexo);
        this.nivelAroma = nivelAroma;
    }
    aromatizar() {
        console.log("Hummm, que cheirinho bom");
    }
    comer() {
        this.peso *= 1.05; // Aumenta o peso em 5%
        console.log(`Peso do gambá após a refeição: ${this.peso.toFixed(2)}kg`);
    }
    movimentar() {
        console.log("O gambá está se movendo, liberando um aroma.");
    }
}
// Criando instâncias dos objetos
// Peixe
let peixe = new Peixe(2.5, 3, "Fêmea", true);
peixe.movimentar(); // O peixe está nadando
peixe.comer(); // Peso do peixe após a refeição
peixe.Aniversario(); // Agora a idade é: 4 anos
// Cachorro
let cachorro1 = new Cachorro("Rex", 5, "Macho", true, 10);
cachorro1.movimentar(); // O cachorro está correndo
cachorro1.latir(); // AU AU AU AU AU AU AU AU AU AU!!!
cachorro1.comer(); // Peso do Rex após a refeição
cachorro1.Aniversario(); // Agora a idade é: 6 anos
// Gato
let gato = new Gato("Mia", 2, "Fêmea", true, 3.2);
gato.movimentar(); // O gato está praticando parkour
gato.Miar(); // Miauuuuu!
gato.comer(); // Peso do Mia após a refeição
gato.Aniversario(); // Agora a idade é: 3 anos
// Gambá
let gamba = new Gamba(5, 4, "Macho", 8);
gamba.movimentar(); // O gambá está se movendo, liberando um aroma.
gamba.aromatizar(); // Hummm, que cheirinho bom
gamba.comer(); // Peso do gambá após a refeição
gamba.Aniversario(); // Agora a idade é: 5 anos
