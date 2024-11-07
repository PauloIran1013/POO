import test from "node:test";

class Cliente {
    public nome: string;
    private email: string;
    private telefone: string;
  
    constructor(nome: string, email: string, telefone: string) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
    }

    public atualizarEmail(novoEmail:string):void{
    if (this.validarEmail(novoEmail)) {
        this.email = novoEmail
        console.log(`Email atualizado para: ${novoEmail}`);
    }else{
        console.log('Email inválido. O email deve conter um "@"');
    }
    }
    public atualizarTelefone(novoTelefone: string): void {
        if (this.validarTelefone(novoTelefone)) {
          this.telefone = novoTelefone;
          console.log(`Telefone atualizado para: ${novoTelefone}`);
        } else {
          console.log('Telefone inválido. O telefone deve conter apenas números.');
        }
      }
      public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Telefone: ${this.telefone}`);
      }
    public validarEmail(email:string):boolean{
        return email.includes('@')
    }
    public validarTelefone(telefone:string):boolean{
        return /^\d+$/.test(telefone)
    }

}

const cliente1 = new Cliente("João Silva", "joao.silva@email.com", "123456789");
cliente1.exibirInformacoes();


cliente1.atualizarEmail("novo.email@dominio.com");
cliente1.atualizarTelefone("987654321");
cliente1.exibirInformacoes();


cliente1.atualizarEmail("emailinvalido.com");
cliente1.atualizarTelefone("telefone-invalido")


    
