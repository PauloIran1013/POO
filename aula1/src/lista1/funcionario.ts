class CLT{
    nome:string;
    salario:number;

    constructor( nome:string,salario:number){
     this.nome = nome;
     this.salario = salario;
    }
    exibirInfo():void{
        console.log(`Nome: ${this.nome}, Salário: R$ ${this.salario}`)
    }
    aumentarSalario(percentual:number):void{
        const aumento = this.salario *(percentual/100)
        this.salario += aumento
        console.log(`Salário aumentado em ${percentual}%. Novo salário: R$${this.salario.toFixed(2)}`);
    }
    }

    const funcionario = new CLT('João', 2000);
funcionario.exibirInfo(); // Output: Nome: João, Salário: R$2000
funcionario.aumentarSalario(10); // Aumenta o salário em 10%
funcionario.exibirInfo(); // Output: Nome: João, Salário: R$2200
