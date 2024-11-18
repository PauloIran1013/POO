export class Loja{
   protected nome:string;
    protected preco:number;
    protected estoque:number;

    constructor(nome:string,preco:number,estoque:number){
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    public getNome():string{
        return this.nome;
        }

    public getPreco():number{
        return this.preco;
    }
    
    public getEstoque():number{
        return this.estoque;
        }


    exibirInfo():void{
        console.log(`Nome: ${this.nome}, Preco: R$ ${this.preco}, Estoque: ${this.estoque}`)
    }

    attEstoque():void{
        this.estoque += 1;
        console.log(`novo estoque ${this.estoque}`);
        
    }
}

const produto1 = new Loja ('Escova de dente', 10, 5) 
produto1.exibirInfo();
produto1.attEstoque();

const produto2 = new Loja ('Rodo', 20, 10) 
produto2.exibirInfo();
produto2.attEstoque();