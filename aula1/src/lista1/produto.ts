class Produto{
    private nome:string;
    private preco: number;
    private quantidade: number;
    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    exibirInfo():void{
        console.log(`Nome: ${this.nome}, Preço: R$ ${this.preco}`)
    }
    
    adicionarEstoque(qtd: number): void{
        if(qtd > 0){
        this.quantidade +=  qtd;
        console.log(`Quantidade de ${this.nome} aumentada em ${qtd}.`);
        }else{
            console.log('Quantidade não pode ser negativa.');
        }
    }
    
    removerEstoque(qtd: number):void{
        if (this.quantidade >= qtd &&  qtd > 0) {
        this.quantidade -= qtd
        console.log(`Quantidade de ${this.nome} adiminuida em ${qtd}.`);
        } else if (qtd >  this.quantidade) {
            console.log("Erro: Estoque insuficiente.");  
        }
        else {
            console.log("Quantidade inválida para adicionar ao estoque.");
          }     
}
}
const produto = new Produto('Camiseta', 50, 10);
produto.exibirInfo(); // Output: Nome: Camiseta, Preço: R$50,
Quantidade: 10
produto.adicionarEstoque(5);
produto.removerEstoque(3);
produto.exibirInfo(); // Output: Nome: Camiseta, Preço: R$50,
Quantidade: 12
produto.removerEstoque(15); // Output: Estoque insuficiente.