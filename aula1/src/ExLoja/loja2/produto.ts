export class Produto {
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
 
     attEstoque(NovoEstoque:number):void{
        const estoque = this.estoque + NovoEstoque;
         console.log(`A Quantidade adicionada foi ${estoque}`);
         
     }
     removerEstoque(NovoEstoque:number):void{
       const estoque = this.estoque - NovoEstoque ;
        console.log(`A Quantidade Removida foi ${estoque}`);
     }

 }