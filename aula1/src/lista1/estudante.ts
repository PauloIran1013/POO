class Aluno{
    nome:string;
    idade:number;

    private notas:number[] = [];
    private matricula: string;
    constructor(nome: string, idade: number, matricula:string) {
        this.nome = nome
        this.idade = idade
        this.matricula = matricula

}
adicionarNota(nota:number):void{
  if(nota >= 0 && nota <=10){
    this.notas.push(nota)
  }else{
    console.log("Nota invalida")
  }      
}
calcularMedia():number{
    if (this.notas.length === 0) {
        return  0
    }else{
        const soma = this.notas.reduce((a, b) => a + b, 0) 
        return soma / this.notas.length;
    }
}

exibirInformacoes(): void {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Matrícula: ${this.matricula}`);
  }
}   

 // Testando a classe Estudante
const estudante = new Aluno('Lucas', 20, '2023001');
estudante.adicionarNota(8);
estudante.adicionarNota(9);
estudante.adicionarNota(7);
estudante.exibirInformacoes();  // Exibe: Nome: Lucas, Idade: 20, Matrícula: 2023001
console.log(`Média: ${estudante.calcularMedia()}`);  // Exibe: Média: 8.0

class Pessoa {
    private _nome: string;
    private _idade: number;
    private _altura: number;
  
    constructor(nome: string, idade: number, altura: number) {
      this._nome = nome;
      this._idade = idade;
      this._altura = altura;
    }

    
    get nome() : string {
        return this._nome
    }
    
    public set nome(nome: string) {
    if (nome.length >= 3) {
        this._nome = nome
    }else{
        console.log("Nome invalido")
    }
    }
    
    
    public get idade () :number {
        return this._idade
    }
    

    public set idade(idade:number) {
        if (idade > 0 && idade  < 150) {
            this._idade = idade
            
        }else{
            console.log("Idade invalida")
        }
    }
    
    
    public get altura() : number {
        return this._altura
    }
    
    
    public set altura(altura:number) {
        if (altura>0) {
            this._altura = altura
        }else{
            console.log("Altura inválida! A altura deve ser maior que 0.");
        }
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this._nome}, tenho ${this._idade} anos e minha altura é ${this._altura} metros.`);
      }
    
      
      fazerAniversario(): void {
        this._idade++;
        console.log(`Feliz aniversário, ${this._nome}! Agora você tem ${this._idade} anos.`);
      }
    }
    
    // Testando a classe Pessoa
    const pessoa1 = new Pessoa('João', 30, 1.75);
    pessoa1.apresentar();  // Exibe: Olá, meu nome é João, tenho 30 anos e minha altura é 1.75 metros.
    pessoa1.fazerAniversario();  // Exibe: Feliz aniversário, João! Agora você tem 31 anos.
    pessoa1.nome = 'Maria';  // Atualiza o nome
    pessoa1.idade = 25;  // Atualiza a idade
    pessoa1.altura = 1.68;  // Atualiza a altura
    pessoa1.apresentar();  // Exibe: Olá, meu nome é Maria, tenho 25 anos e minha altura é 1.68 metros.
    
