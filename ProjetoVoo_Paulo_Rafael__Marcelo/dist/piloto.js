"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piloto = void 0;
class Piloto {
    constructor(nome, email, cpf, ocupacao, breve, anosExperiencia, avaliacao) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.ocupacao = ocupacao;
        this.breve = breve;
        this.anosExperiencia = anosExperiencia;
        this.avaliacao = avaliacao;
    }
    getBreve() {
        return this.breve;
    }
    getAnosExp() {
        return this.anosExperiencia;
    }
    setAnosExp(novoAnosexp) {
        if (novoAnosexp <= 0) {
            console.log(`${novoAnosexp} invalido`);
        }
        else {
            this.anosExperiencia = novoAnosexp;
        }
    }
    getAvaliacao() {
        return this.avaliacao;
    }
    setAvaliacao(novaAvaliacao) {
        if (novaAvaliacao < 0 || novaAvaliacao > 10) {
            console.log(`${novaAvaliacao} invalido`);
        }
        else {
            this.avaliacao = novaAvaliacao;
        }
    }
    embarcar() {
        console.log(`${this.nome} está embarcando...`);
    }
    validarEmail() {
        if (this.email.includes('@') && this.email.includes('.')) {
            console.log(`${this.nome} tem um e-mail válido.`);
        }
        else {
            console.log(`${this.nome} tem um e-mail inválido.`);
        }
    }
    pilotar() {
        console.log(`${this.nome} está pilotando...`);
    }
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, cpf: ${this.cpf}, Ocupação: ${this.ocupacao}, Anos de experiências: ${this.anosExperiencia}, Breve: ${this.breve}, Avaliaçao: ${this.avaliacao}☆`);
    }
}
exports.Piloto = Piloto;
// // Criando um objeto da classe Piloto
// const piloto1 = new Piloto(
//     'Carlos Silva',               
//     'carlos.silva@example.com',    
//     '123.456.789-00',               
//     'Piloto',                      
//     12345,                        
//     10,                            
//     8                            
// );
// // Usando os métodos do objeto piloto1
// // Validando o email
// piloto1.validarEmail();  // Verifica se o email é válido
// // Exibindo as informações do piloto
// piloto1.exibirInfo();  // Exibe as informações do piloto
// // Atualizando os anos de experiência e a avaliação
// piloto1.setAnosExp(12);  // Atualiza para 12 anos de experiência
// piloto1.setAvaliacao(9); // Atualiza para 9 na avaliação
// // Exibindo as informações novamente após as atualizações
// piloto1.exibirInfo();  // Exibe as informações atualizadas
// // Embarcando (simulando a ação de embarcar)
// piloto1.embarcar();  // Exibe a mensagem de embarque
// // Pilotando (simulando a ação de pilotar)
// piloto1.pilotar();  // Exibe a mensagem de pilotagem
