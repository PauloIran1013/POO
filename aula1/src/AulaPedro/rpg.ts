export class Personagem{
    private nome:string;
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

    public getMagia():number{
        return this.magia
    }

// método para aplicar dano, diminuindo a vida do personagem
    public receberDano(dano:number):string{
    this.setVida(this.vida - dano);
    return `${this.nome} recebeu ${dano} de dano e agora tem ${this.vida} de vida.`
    }
} 
const personagem = new Personagem('Cleiton',100,35,17,0);
