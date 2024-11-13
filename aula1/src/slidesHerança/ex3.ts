class Pessoa1{
    private nome:string;
    private idade:number;
    constructor( nome:string,idade:number){
        this.nome = nome;
        this.idade = idade;
    }
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }
    public getIdade(): number {
        return this.idade;
    }
    public setIdade(idade: number): void {
        this.idade = idade;
     }
 
}

class PessoaFisica extends Pessoa1{
    private cpf:string;
    private cnh:string;
    constructor( nome:string,idade:number,cnh:string,cpf:string){
        super(nome,idade);
        this.cnh = cnh;
         this.cpf = cpf;
    }

    
    public getCpf() : string {
        return this.cpf;
    }

    
    public getCnh() : string {
        return this.cnh
    }
    
    public hashCode(): number {
        let hash = 0;
        for (let i = 0; i < this.cpf.length; i++) {
            const char = this.cpf.charCodeAt(i);
            hash = (hash << 5) - hash + char;
        }
        return hash;
    }

    
    public equals(outraPessoa: PessoaFisica): boolean {
        return this.cpf === outraPessoa.getCpf() && this.cnh === outraPessoa.getCnh();
    }
}

class PessoaJuridica extends Pessoa1{
    private cnpj:string;
    private razaoSocial:string;
    constructor(nome:string,idade:number,cnpj:string,razaoSocial:string){
        super(nome,idade);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
}


public getCnpj() : string {
    return this.cnpj
}

public getRazaoSocial() : string {
    return this.razaoSocial
}


public setRazaoSocial(razaoSocial: string):void{
    this.razaoSocial = razaoSocial;
}
}


// Criando um objeto PessoaFisica
let pessoaFisica1 = new PessoaFisica("João Silva", 30, "123456789", "123.456.789-00");
let pessoaFisica2 = new PessoaFisica("Maria Oliveira", 25, "987654321", "123.456.789-00");
let pessoaFisica3 = new PessoaFisica("Carlos Souza", 28, "111222333", "987.654.321-00");

// Exibindo informações da Pessoa Física
console.log("Pessoa Física 1: ", pessoaFisica1.getNome(), pessoaFisica1.getIdade(), pessoaFisica1.getCpf(), pessoaFisica1.getCnh());
console.log("Pessoa Física 2: ", pessoaFisica2.getNome(), pessoaFisica2.getIdade(), pessoaFisica2.getCpf(), pessoaFisica2.getCnh());
console.log("Pessoa Física 3: ", pessoaFisica3.getNome(), pessoaFisica3.getIdade(), pessoaFisica3.getCpf(), pessoaFisica3.getCnh());

// Testando o método hashCode()
console.log("Hash Code Pessoa Física 1: ", pessoaFisica1.hashCode());
console.log("Hash Code Pessoa Física 2: ", pessoaFisica2.hashCode());

// Testando o método equals()
console.log("Pessoa Física 1 e 2 são iguais? ", pessoaFisica1.equals(pessoaFisica2)); // Deve retornar false
console.log("Pessoa Física 1 e 3 são iguais? ", pessoaFisica1.equals(pessoaFisica3)); // Deve retornar false
console.log("Pessoa Física 2 e 3 são iguais? ", pessoaFisica2.equals(pessoaFisica3)); // Deve retornar false


// Criando um objeto PessoaJuridica
let pessoaJuridica1 = new PessoaJuridica("Empresa XYZ", 10, "12.345.678/0001-90", "XYZ Ltda.");
let pessoaJuridica2 = new PessoaJuridica("Empresa ABC", 5, "98.765.432/0001-01", "ABC Ltda.");

// Exibindo informações da Pessoa Jurídica
console.log("Pessoa Jurídica 1: ", pessoaJuridica1.getNome(), pessoaJuridica1.getIdade(), pessoaJuridica1.getCnpj(), pessoaJuridica1.getRazaoSocial());
console.log("Pessoa Jurídica 2: ", pessoaJuridica2.getNome(), pessoaJuridica2.getIdade(), pessoaJuridica2.getCnpj(), pessoaJuridica2.getRazaoSocial());

// Modificando a razão social da Pessoa Jurídica 1
pessoaJuridica1.setRazaoSocial("XYZ Comércio");
console.log("Nova Razão Social da Pessoa Jurídica 1: ", pessoaJuridica1.getRazaoSocial());
