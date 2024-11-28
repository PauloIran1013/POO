import { Avioes } from './avioes';
import { Passagem } from './passagem';
import { InfoVoo } from './infoVoo';
import { Piloto } from './piloto';
import { Passageiro } from './Usuario';

const piloto1 = new Piloto('Carlos Silva', 'carlos.silva@example.com', '123.456.789-00', 'Piloto', 12345, 10, 8);
const passageiro1 = new Passageiro('João Oliveira', 'joao.oliveira@example.com', '987.654.321-00', 'Passageiro', 67890, 500);

piloto1.exibirInfo();
piloto1.validarEmail();
piloto1.embarcar();
piloto1.pilotar();

passageiro1.exibirInfo();
passageiro1.validarEmail();
passageiro1.embarcar();

const aviao1 = new Avioes('Airbus A320', 'Airbus', 180, 'Carlos Silva', 'carlos.silva@example.com', '123.456.789-00', 'Piloto', 54321, 10, 9, 500, 200);

aviao1.exibirInfo();

aviao1.abastecer(100);
aviao1.abastecer(-20); 

aviao1.voar();
aviao1.pousar();

const passagem1 = new Passagem('Carlos Silva', 'carlos.silva@example.com', '123.456.789-00', 'Passageiro', 56789, 'São Paulo', 350.00, true, 10, 1000);

passagem1.exibirInfo();

passagem1.validarEmail();

passagem1.comprar(2); 
passagem1.comprar(12);
passagem1.comprar(500); 

passagem1.extornar(1);

// passagem1.exibirInfo();

const infoVoo = new InfoVoo(aviao1, passagem1, '2024-12-01', '2024-12-10', '9h', 5, 175);

infoVoo.exibirInfo();

infoVoo.ocuparAssento(5); 
infoVoo.desocuparAssento(2); 

infoVoo.ocuparAssento(200);

infoVoo.desocuparAssento(10); 
