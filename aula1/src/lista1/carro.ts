import promptSync from "prompt-sync";

const prompt = promptSync();

    class Carro{
        marca:string;
        modelo:string;
        ano:number;
        quilometragem:number;

        constructor (marca:string, modelo:string, ano:number, quilometragem:number){
            this.marca = marca;
            this.modelo = modelo;
            this.ano= ano;
            this.quilometragem = quilometragem
        }

        exibirInfo():void{
            console.log(`Marca: ${this.marca}; Modelo:${this.modelo};  Ano:${this.ano}; Quilometragem:${this.quilometragem}`)
        }
        andar(km: number): void{
            this.quilometragem += km;
            if (km > 0) {
                console.log(`O carro ${this.modelo} percorreu ${km} km. Quilometragem total: ${this.quilometragem} km.`);
            }else {
                console.log("Digite um valor válido");
                
            }
        }
    }
    const meuCarro = new Carro('Toyota', 'Corolla', 2020, 15000);
    meuCarro.exibirInfo();
    meuCarro.andar(1000);