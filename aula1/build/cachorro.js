"use strict";
class Dog {
    raca;
    nome;
    porte;
    pedigree;
    sexo;
    peso;
    dataNasc;
    constructor(raca, nome, porte, pedigree, sexo, peso, dataNasc) {
        this.raca = raca;
        this.nome = nome;
        this.porte = porte;
        this.pedigree = pedigree;
        this.sexo = sexo;
        this.peso = peso;
        this.dataNasc = dataNasc;
    }
    exibirInfo() {
        console.log(`Raça: ${this.raca}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Porte: ${this.porte} `);
        console.log(`Pedigree: ${this.pedigree}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Data de nascimento: ${this.dataNasc}`);
    }
    LevantaPerna() {
        if (this.sexo === "masculino") {
            console.log('Levanta a perna');
        }
        else {
            console.log('Não levanta a perna');
        }
    }
}
const cachorro = new Dog('Vira-lata', 'Clóvis', 'médio', false, 'masculino', '7,03', "10/01/2024");
cachorro.exibirInfo();
cachorro.LevantaPerna();
