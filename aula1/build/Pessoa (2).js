"use strict";
class Pessoa {
    // Propriedades da classe
    nome;
    idade;
    // Construtor para inicializar as propriedades
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    // Método para obter o nome
    getNome() {
        return this.nome;
    }
    // Método para definir um novo nome
    setNome(nome) {
        this.nome = nome;
    }
    // Método para obter a idade
    getIdade() {
        return this.idade;
    }
    // Método para definir uma nova idade
    setIdade(idade) {
        this.idade = idade;
    }
    // Método para exibir informações da pessoa
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
        //console.log(`Nome: ${this.nome}`);
    }
}
const pessoa = new Pessoa("Renata", 48);
pessoa.exibirInformacoes();
