class Livro{
    titulo:string;
    autor:string;
    anoPublicacao:number;
    private disponivel:boolean;

    public  constructor(titulo: string, autor: string, anoPublicacao: number, disponivel: boolean){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.disponivel = disponivel;
    }
    emprestar():void{
        if (this.disponivel) {
        this.disponivel = false
        console.log('Livro emprestado com sucesso.');
        }
        else{
            console.log('Livro não disponível.');
        }
    }
   devolver():void{
    if (this.disponivel) {
        this.disponivel = true
        console.log('Livro devolvido com sucesso.');
    }else{
        console.log('O livro já está disponível.');
    }
   }
   public exibirInformacoes(): void {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Ano: ${this.anoPublicacao}`);
    console.log(`Disponível: ${this.disponivel}`);
  }
}
    
  const livro = new Livro('Dom Casmurro', 'Machado de Assis', 1899, true);
  livro.exibirInformacoes(); // Output: Título: Dom Casmurro, Autor: Machado
  //de Assis, Ano: 1899, Disponível: true
  livro.emprestar(); // Output: Livro emprestado com sucesso.
  livro.emprestar(); // Output: Livro não disponível.
  livro.devolver();
  livro.exibirInformacoes(); // Output: Título: Dom Casmurro, Autor: Machado
//   de Assis, Ano: 189 

