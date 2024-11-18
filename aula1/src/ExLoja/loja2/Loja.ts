import { Alimento } from "../alimento";
import { Produto } from "./produto";

 console.log("\nLista de produtos");
 
 const produto1 = new Produto ('Escova de dente', 10, 5) 
 produto1.exibirInfo();
 produto1.removerEstoque(2);
 produto1.attEstoque(3);




  const produto2 = new Produto ('Rodo', 20, 10) 
 produto2.exibirInfo();
 produto1.removerEstoque(2);
 produto1.attEstoque(3);

 const produto3 = new Produto ('Sabão', 5, 10) 
 produto3.exibirInfo();
 produto1.removerEstoque(2);
 produto1.attEstoque(3);

 const produto4 = new Produto ('Toalha', 20, 10) 
 produto1.exibirInfo();
 produto1.removerEstoque(2);
 produto1.attEstoque(3);


const alimento1 = new Alimento('Arroz', 11, 100, '2027-10-11');
alimento1.exibirInfo();
produto1.removerEstoque(2);
produto1.attEstoque(3);

const alimento2 = new Alimento('Feijão', 9, 120, '2026-12-15');
alimento2.exibirInfo();
produto1.removerEstoque(2);
produto1.attEstoque(3);
const alimento3 = new Alimento('Macarrão', 8, 150, '2025-05-20');
alimento3.exibirInfo();
produto1.removerEstoque(2);
produto1.attEstoque(3);
const alimento4 = new Alimento('Açúcar', 15, 200, '2028-02-02');
alimento4.exibirInfo();
produto1.removerEstoque(2);
produto1.attEstoque(3);
