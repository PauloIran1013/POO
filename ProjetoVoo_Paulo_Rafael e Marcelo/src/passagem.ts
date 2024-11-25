import { Passageiro } from "./Usuario";

interface passagem{
     destino:string;
     preco: number;
     disponivel: boolean;
     qtdDisponivel:number;
     comprar ():void;
     extornar():void;
     
}


export class Passagem extends Passageiro{
    private destino:string;
    private preco: number;
    private disponivel: boolean;
    private qtdDisponivel:number;

    constructor(nome: string, email: string, cpf: string, ocupacao: 'Passageiro', nPassaport: number, destino:string, preco:number, disponivel:boolean,qtdDisponivel:number) {
        super(nome, email, cpf, ocupacao, nPassaport);
        this.destino = destino;
        this.preco = preco;
        this.disponivel = disponivel; 
        this.qtdDisponivel = qtdDisponivel;
    }

    
    public getDestino() : string {
        return this.destino
    }
    
    
    public getPreco() : number {
        return this.preco
    }

    
    public setPreco(novoPreco:number) {
    if (novoPreco <= 0) {
        console.log(`Valor inválido`);
        
    }else{
        this.preco = novoPreco;
    }
    }

    
    public getDisponivel() : boolean {
        return this.disponivel
    }

    
    public getQtdDisponivle() : number {
        return this.qtdDisponivel
    }

    public setQtdDisponivel(novoQtdDisponivel:number) {
        if (novoQtdDisponivel <= 0) {
            console.log(`Valor inválido`);
        }else{
            this.qtdDisponivel = novoQtdDisponivel;
        }
    }

    
    
    public comprar(ContaPassageiro:number,qtdComprada:number):void{
        if(this.disponivel == true && ContaPassageiro > this.preco && this.qtdDisponivel > 0 && this.qtdDisponivel >= qtdComprada){
          this.qtdDisponivel -= qtdComprada;
            console.log(`Compra realizada com sucesso!`)
            console.log(`Quantidade disponível: ${this.qtdDisponivel}`);
            
    }else{
        console.log(`Passagem não disponível`)
    }    
} 
public extornar(qtdExtornada:number):void{
    this.disponivel = true;
    this.qtdDisponivel += qtdExtornada
    console.log(`Passagem extornada com sucesso!`)
    console.log(`Nova quantidade disponível: ${this.qtdDisponivel}`)
}   


public exibirInfo(): void {
    super.exibirInfo(); // Chama o método exibirInfo da classe Passageiro para exibir os dados do passageiro
    console.log(`Destino: ${this.destino}, Preço: R$${this.preco}, Disponível: ${this.disponivel ? 'Sim' : 'Não'}, Quantidade disponível: ${this.qtdDisponivel}`);
}
}

// Criando um objeto da classe Passagem
const passagem1 = new Passagem(
    'Carlos Silva',                   // Nome do passageiro
    'carlos.silva@example.com',        // Email do passageiro
    '123.456.789-00',                 // CPF do passageiro
    'Passageiro',                     // Ocupação do passageiro
    56789,                            // Número do passaporte
    'São Paulo',                      // Destino
    350.00,                           // Preço da passagem
    true,                             // Passagem disponível
    10                                // Quantidade disponível
);

// Exibindo informações da passagem e do passageiro
passagem1.exibirInfo();

// Tentando comprar passagens com diferentes quantidades e saldo
passagem1.comprar(400, 2);  // Conta do passageiro com R$400, comprando 2 passagens
passagem1.comprar(400, 12); // Conta do passageiro com R$400, tentando comprar 12 passagens (excede a quantidade disponível)

// Extornando a passagem
passagem1.extornar(1);

// Exibindo as informações após o estorno
passagem1.exibirInfo();
