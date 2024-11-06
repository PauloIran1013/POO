class Personagem {
    nome: string;
    vida: number;
    energia: number;
    ataque: number;
    defesa: number;
    raca: string;
    classe: string;
    stamina: number;
    mana: number;
    powerAttack: number;
    intelecto: number;
    armor: number;
  
    constructor(
      nome: string,
      vida: number,
      energia: number,
      ataque: number,
      defesa: number,
      raca: string,
      classe: string,
      stamina: number,
      mana: number,
      powerAttack: number,
      intelecto: number,
      armor: number
    ) {
      this.nome = nome;
      this.vida = vida;
      this.energia = energia;
      this.ataque = ataque;
      this.defesa = defesa;
      this.raca = raca;
      this.classe = classe;
      this.stamina = stamina;
      this.mana = mana;
      this.powerAttack = powerAttack;
      this.intelecto = intelecto;
      this.armor = armor;
    }

    personagemInfo():void{
        console.log(`Nome:${this.nome};
            Energia:${this.energia};
            Vida:${this.vida};
            Ataque:${this.ataque};
            Defesa:${this.defesa};
            Raça:${this.raca};
            Classe:${this.classe};
            Stamina:${this.stamina};
            Mana:${this.mana};
            Poder de ataque:${this.powerAttack};
            Intelecto:${this.intelecto};
            Armadura:${this.armor}`)
    }

    atacar():void{
        console.log(`${this.nome} esta andando em uma floresta quando derrepente aparece dinossauro`);
        console.log(`Informações sobre o dinosauro: Vida:100; Poder de ataque:10`);
       const D = 100 - this.powerAttack 
       const vd = 100 - D;
        console.log(`O dinossauro sofreu ${D} de dano`); 
        console.log(`Vida atual do dinossauro: ${vd}`);   
    }
    danoSofrido():void{
        console.log(`O dinossauro ataca o ${this.nome}`);
        console.log(`O personagem ${this.nome} sofreu 10 de dano`)
        const danoSofrido =  this.vida - 10;
        console.log(`Vida atual ${danoSofrido}`);
        
    }

}

const guerreiro = new Personagem("Arthas",150, 120, 30,20,"Humano","Guerreiro",80, 50, 60,  25,  15  );
guerreiro.personagemInfo();
guerreiro.atacar();
guerreiro.danoSofrido();