import { Usuario } from "./Usuario";

export class Piloto implements Usuario {
    public nome: string;
    public email: string;
    public cpf: string;
    public ocupacao: 'Piloto';
    private breve: number;
    private anosExperiencia:number
    private avaliacao:number;

    constructor(nome:string,email:string,cpf:string,ocupacao: 'Piloto',breve:number, anosExperiencia:number,avaliacao:number) {
        
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.ocupacao = ocupacao;
        this.breve = breve;
        this.anosExperiencia = anosExperiencia;
        this.avaliacao = avaliacao;

}


public getBreve() : number {
    return  this.breve
}

public getAnosExp() : number {
    return this.anosExperiencia
}


public setAnosExp(novoAnosexp : number) {
    if (novoAnosexp <=0) {
        console.log(`${novoAnosexp} invalido`);
        
    }else{
        this.anosExperiencia = novoAnosexp
    }
}


public getAvaliacao() : number {
    return this.avaliacao
}


public setAvaliacao(novaAvaliacao : number) {
    if (novaAvaliacao < 0 || novaAvaliacao > 10){
        console.log(`${novaAvaliacao} invalido`)
    }else{
        this.avaliacao = novaAvaliacao
    }
}



public embarcar(): void {
    console.log(`${this.nome} está embarcando...`);
}
    public validarEmail(): void {
        if (this.email.includes('@') && this.email.includes('.')) {
            console.log(`${this.nome} tem um e-mail válido.`);
        } else {
            console.log(`${this.nome} tem um e-mail inválido.`);
        }
    }

public pilotar():void{
    console.log(`${this.nome} está pilotando...`)
}

public exibirInfo(): void {
    console.log(`Nome: ${this.nome}, Email: ${this.email}, cpf: ${this.cpf}, Ocupação: ${this.ocupacao}, Anos de experiências: ${this.anosExperiencia}, Breve: ${this.breve}, Avaliaçao: ${this.avaliacao}☆`)
}




}

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
