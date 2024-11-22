import { Veiculos } from "./veiculo";

export class Caminhao extends Veiculos {
    private capacidadeCarga: number;
    private numeroEixo:number;
    constructor(marca: string,modelo: string,ano: number,ValorLocacao:number,capacidadeCarga: number, numeroEixo:number){
        super(marca,modelo,ano,ValorLocacao);
        this.capacidadeCarga = capacidadeCarga;
        this.numeroEixo = numeroEixo
    }

    
    public getCapacidadeCarga():number {
        return this.capacidadeCarga
    }
    
    public setCapacidadeCarga(capacidadeCarga:number) {
        if (capacidadeCarga>0) {
            this.capacidadeCarga = capacidadeCarga    
        }else{
            console.log("Capacidade de carga invalida")
        }
    }
    
    
    public getNumeroEixo() : number {
        return this.numeroEixo
    }

    
    public setNumeroEixo(numeroEixo:number) {
        if (numeroEixo> 0) {
            this.numeroEixo = numeroEixo
            }else{
                console.log("Numero de eixos invalido")
            }
    }

    public exibirInfo(): void {
        console.log(`Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano} \n Valor Locação: ${this.ValorLocacao} \n Capacidade de carga: ${this.capacidadeCarga} \n Numero de eixo: ${this.numeroEixo}`)
    }

    public ValorSeguro(anosExp:number){
        const seguro = anosExp  * this.ValorLocacao
        console.log(`Valor do seguro: ${seguro}`)
    }
    }

    const caminhao1 = new Caminhao("Volvo", "FH16", 2019, 500.0, 20, 4);
    caminhao1.exibirInfo();
    caminhao1.ValorSeguro(5);

    

    
    

