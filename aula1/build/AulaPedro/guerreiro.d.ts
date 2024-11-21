import { Personagem } from "./rpg";
export declare class guerreiro extends Personagem {
    constructor(nome: string);
    giroDoPeao(alvo: Personagem): void;
    ataqueFurioso(alvo: Personagem): void;
    GarraDoLeão(alvo: Personagem): void;
    MacetadaViolenta(alvo: Personagem): void;
    Paulada(alvo: Personagem): string;
    exibirInfo(): void;
}
