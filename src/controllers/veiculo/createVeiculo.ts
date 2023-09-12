import { Request, Response } from 'express';
import { Veiculo } from '../../models/veiculoModel';
import { saveVeiculos, criarCarro, criarMoto } from '../../service/veiculo/createVeiculoService';
import { getVeiculos } from '../../service/veiculo/listVeiculoService';

async function createVeiculo(req: Request, res: Response): Promise<void> {
  try {

    const novoVeiculo: Veiculo = req.body;

    console.log(novoVeiculo)

    const veiculos: Veiculo[] = await getVeiculos();

    if (novoVeiculo.quantidadePortas) {
      const carro = criarCarro(
        novoVeiculo.modelo,
        novoVeiculo.anoFabricacao,
        novoVeiculo.quantidadePortas,
        novoVeiculo.marca
      );
      veiculos.push(carro);
    } else if (novoVeiculo.rodas && novoVeiculo.passageiros) {
      const moto = criarMoto(
        novoVeiculo.modelo,
        novoVeiculo.anoFabricacao,
        novoVeiculo.marca,
        novoVeiculo.rodas,
        novoVeiculo.passageiros
      );
      veiculos.push(moto);
    } else {
      throw new Error('Os dados do veículo são inválidos.');
    }

    await saveVeiculos(veiculos);

    res.status(201).json(novoVeiculo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o veículo.' });
  }
}

export { createVeiculo };
