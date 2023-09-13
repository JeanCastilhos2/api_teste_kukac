import { Request, Response } from 'express';
import { palindromosService } from '../../service/palindromos/palindromosService';
import { Resultado } from '../../models/palindromosModel';

async function palindromosController(req: Request, res: Response): Promise<void> {
  try {
    const { numInicio, numFim } = req.query;

    if (!numInicio || !numFim) {
      res.status(400).json({ error: 'Forneça os parâmetros numInicio e numFim.' });
      return;
    }

    const inicio = parseInt(numInicio as string, 10);
    const fim = parseInt(numFim as string, 10);

    if (isNaN(inicio) || isNaN(fim)) {
      res.status(400).json({ error: 'Os parâmetros numInicio e numFim devem ser números inteiros.' });
      return;
    }

    const numerosPalindromos = palindromosService(inicio, fim);

    const resultado: Resultado = {
      numerosPalindromos,
    };

    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar números palíndromos.' });
  }
}

export { palindromosController };
