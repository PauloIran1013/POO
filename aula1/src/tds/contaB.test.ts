import { DEPOSITO_INVAlIDO } from "./constantes";
import { SALDO_INSUFICIENTE } from "./constantes";
import { ContaBancaria } from "./contaB"

describe("Quando depos   itar",()=>{
it("Deve ser possivel realizar depositos",() => {
    
    //Cenario
    const conta:ContaBancaria = new ContaBancaria();
    
    
    //Execução
    conta.depositar(100)

    //validação
    expect(conta.saldo).toBe(100)
})
it("não deve ser possivel depositar um valor negativo",()=>{
    
    //Cenario
    const conta:ContaBancaria = new ContaBancaria();

    //Validação e ação
    expect(() => conta.depositar(-100)).toThrow(DEPOSITO_INVAlIDO);
})

})

describe("Quando sacar",()=>{
    it("Deve subtrair o valor do saque do saldo ",() => {
        //Cenario
        const conta:ContaBancaria = new ContaBancaria();
        conta.depositar(1000)

        //Ação
        conta.sacar(200)
        
        //Validação
        expect(conta.saldo).toBe(800)
    })
    it("não deve ser possivel sacar um valor maior que o saldo",()=>{
        //Cenario
        const conta:ContaBancaria = new ContaBancaria();
        conta.depositar(1000)

        //Ação e validação
        expect(() => conta.sacar(2000)).toThrow(SALDO_INSUFICIENTE)
    })
})

