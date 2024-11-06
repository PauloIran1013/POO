import promptSync from "prompt-sync";

const prompt = promptSync();
class Cliente        {
    nome: string;
    private cpf: string;
    dataNascimento: string;
    qtdDinheiro: number;

    constructor(nome: string, cpf: string, dataNascimento: string, qtdDinheiro: number) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento; 
        this.qtdDinheiro = qtdDinheiro;
    }
    pessoaInfo(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Data de Nascimento: ${this.dataNascimento}`);
        console.log(`Quantidade de Dinheiro: R$ ${this.qtdDinheiro.toFixed(2)}`);
    }
dinheiroSuficiente():void{
const  valor: number = parseFloat(prompt('Digite o valor do produto: '));
if (valor > this.qtdDinheiro) {
    console.log(`Você não tem dinheiro para comprar o produto`);
}else{
    console.log(`Você tem la grana`);
    
}

}
}

const pessoa1 = new Cliente("João Silva", "123.456.789-00", "1990-05-15", 1000);
pessoa1.pessoaInfo()
pessoa1.dinheiroSuficiente()
