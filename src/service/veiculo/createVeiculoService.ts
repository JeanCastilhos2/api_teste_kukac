import { Veiculo, Carro, Moto } from '../../models/veiculoModel';
import fs from 'fs/promises';
import path from 'path';

const dbFilePath = path.join(__dirname, '../../database/db.json');

async function saveVeiculos(veiculos: Veiculo[]): Promise<void> {
  await fs.writeFile(dbFilePath, JSON.stringify(veiculos, null, 2));
}

function criarCarro(modelo: string, anoFabricacao: number, quantidadePortas: number, marca: string): Carro {
  if (quantidadePortas >= 2 && quantidadePortas <= 4) {
    return new Carro(modelo, anoFabricacao, quantidadePortas, marca);
  } else {
    throw new Error('A quantidade de portas deve estar entre 2 e 4 para um carro.');
  }
}

function criarMoto(modelo: string, anoFabricacao: number, marca: string, rodas: number, passageiros: number): Moto {
  if (rodas === 2 && (passageiros >= 1 && passageiros <= 2)) {
    return new Moto(modelo, anoFabricacao, marca, rodas, passageiros);
  } else {
    throw new Error('Uma moto deve ter 2 rodas e permitir de 1 a 2 passageiros.');
  }
}

export { saveVeiculos, criarCarro, criarMoto };
