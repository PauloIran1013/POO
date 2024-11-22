import { mago } from "./mago";

export abstract class Personagem{
    protected nome:string;
    private vida:number;
    protected forca:number;
    private defesa:number;
    private magia:number;
    constructor(nome:string, vida:number, forca:number, defesa:number, magia:number){
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.magia = magia
    }
    public getNome(): string{
        return this.nome;
    }
    
    public getVida() : number {
        return this.vida
    }

    
    public setVida(novaVida:number) {
        this.vida = novaVida < 0 ? 0 : novaVida;
    }

    public getForca() : number {
        return this.forca
    }

    public getDefesa():number{
        return this.defesa
    }
    
    public setDefesa(novaDefesa: number) {
        this.defesa = novaDefesa < 0 ? 0 : novaDefesa;
    }
    public AumentoDefesaM(defesaNova:number){
        this.defesa = defesaNova
    }

    public getMagia():number{
        return this.magia
    }

    exibirInfo():void{
        console.log(`Nome: ${this.nome},Vida: ${this.vida},Força: ${this.forca},Defesa: ${this.defesa},Magia: ${this.magia}`); 
    }


// método para aplicar dano, diminuindo a vida do personagem
    public receberDano(dano:number):string{
    this.setVida(this.vida - dano);
    return `${this.nome} recebeu ${dano} de dano e agora tem ${this.vida} de vida.`
    }
public abstract atacar():void

    
} 
// const personagem = new Personagem('Cleiton',100,35,17,0);
// console.log(personagem.atacar());

// // personagem.exibirInfo()
// // console.log(personagem.receberDano(101))
// // personagem.exibirInfo()