import { Request, Response } from 'express';
import { Veiculo } from '../../models/veiculoModel';
import { getVeiculos } from '../../service/veiculo/listVeiculoService';

async function listVeiculos(req: Request, res: Response): Promise<void> {
  try {
    const veiculos: Veiculo[] = await getVeiculos();
    res.status(200).json(veiculos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os veículos.' });
  }
}

export { listVeiculos };
