"use strict";
var Status;
(function (Status) {
    Status["INATIVO"] = "inativo";
    Status["ATIVO"] = "ativo";
})(Status || (Status = {}));
class Usuarios {
    senha;
    nome;
    status;
    ultimoAcesso;
    constructor(senha, nome, status, ultimoAcesso) {
        this.senha = senha;
        this.nome = nome;
        this.status = status;
        this.ultimoAcesso = ultimoAcesso;
    }
    exibirinfo() {
        console.log(`nome: ${this.nome}, ultimo acesso: ${this.ultimoAcesso}`);
    }
}
class Clientes extends Usuarios {
    cpf;
    constructor(senha, nome, status, ultimoAcesso, cpf) {
        super(senha, nome, status, ultimoAcesso);
        this.cpf = cpf;
    }
    exibirInfoC() {
        console.log(`nome: ${this.nome}, cpf: ${this.cpf}, ultimo acesso: ${this.ultimoAcesso}, status: ${this.status}`);
    }
}
class Funcionarios extends Usuarios {
    dataAdmissao;
    constructor(senha, nome, status, ultimoAcesso, dataAdmissao) {
        super(senha, nome, status, ultimoAcesso);
        this.dataAdmissao = dataAdmissao;
    }
    exibirinfoF() {
        console.log(`nome: ${this.nome}, ultimo acesso: ${this.ultimoAcesso}, status: ${this.status}, Data de admissão: ${this.dataAdmissao}`);
    }
    DesativarFuncionario() {
        this.status = Status.INATIVO;
        console.log(`Funcionário ${this.nome} foi desativado.`);
    }
    InativarFornecedor(fornecedor) {
        fornecedor.status = Status.INATIVO;
        console.log(`Fornecedor ${fornecedor.nome} foi desativado.`);
    }
    ativarFornecedor(fornecedor) {
        fornecedor.status = Status.ATIVO;
        console.log(`Fornecedor ${fornecedor.nome} foi ativado.`);
    }
}
class Fornecedor extends Usuarios {
    cnpj;
    constructor(senha, nome, status, ultimoAcesso, cnpj) {
        super(senha, nome, status, ultimoAcesso);
        this.cnpj = cnpj;
    }
    exibirinfo() {
        console.log(`nome: ${this.nome}, cnpj: ${this.cnpj}, status: ${this.status}`);
    }
}
//Criando objetos
// Cliente
const cliente1 = new Clientes('senhaCliente123', 'João Silva', Status.ATIVO, '2024-11-10', '123.456.789-00');
cliente1.exibirInfoC(); // Exibe as informações do cliente
// Funcionário
const funcionario1 = new Funcionarios('senhaFuncionario456', 'Maria Oliveira', Status.ATIVO, '2024-11-12', '2020-01-10');
funcionario1.exibirinfoF(); // Exibe as informações do funcionário
// Fornecedor
const fornecedor1 = new Fornecedor('senhaFornecedor789', 'Fornecedor XYZ', Status.ATIVO, '2024-11-05', '12.345.678/0001-90');
fornecedor1.exibirinfo(); // Exibe as informações do fornecedor
// Interações
funcionario1.DesativarFuncionario(); // Desativa o funcionário
funcionario1.InativarFornecedor(fornecedor1); // Inativa o fornecedor
fornecedor1.exibirinfo(); // Exibe as informações do fornecedor (deve mostrar status INATIVO)
// Ativando novamente o fornecedor
funcionario1.ativarFornecedor(fornecedor1); // Ativa o fornecedor
fornecedor1.exibirinfo(); // Exibe as informações do fornecedor (deve mostrar status ATIVO)
