declare class Personagem {
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
    constructor(nome: string, vida: number, energia: number, ataque: number, defesa: number, raca: string, classe: string, stamina: number, mana: number, powerAttack: number, intelecto: number, armor: number);
    personagemInfo(): void;
    atacar(): void;
    danoSofrido(): void;
}
declare const guerreiro: Personagem;
