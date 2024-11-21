import { Personagem } from "./rpg";
export declare class mago extends Personagem {
    constructor(nome: string);
    sinsalabim(alvo: Personagem): void;
    MeteoroDeDesgraça(alvo: Personagem): void;
    ChuvaAcida(alvo: Personagem): void;
    EscudoMagico(defesaNova: Personagem): void;
    mateusComH(alvo: Personagem): void;
    exibirInfo(): void;
}
