import { DEPOSITO_INVAlIDO } from "./constantes";
import { SALDO_INSUFICIENTE } from "./constantes";

export class ContaBancaria{
    sacar(valor: number) {
        const ehSaldoValido = valor > this._saldo
     if (ehSaldoValido) {
        throw new Error(SALDO_INSUFICIENTE);
     }
        this._saldo -= valor
    }
    depositar(valor: number) {
        if (valor<=0) {
            throw new Error(DEPOSITO_INVAlIDO);
        }
        this._saldo += valor
      
    }
    
    constructor(){
        this._saldo = 0
    }
    private _saldo: number = 0;
    
    public get saldo(){
        return this._saldo
    }
}
