import { Request, Response } from 'express';
import { trocoService } from '../../service/troco/trocoService';


async function trocoController(req: Request, res: Response): Promise<void> {
    try {
        const { valorCompra, valorEntregue } = req.query;

        if (!valorCompra || !valorEntregue) {
            res.status(400).json({ error: 'Forneça os parâmetros valorCompra e valorEntregue.' });
            return;
        }

        const compra = parseFloat(valorCompra as string);
        const entregue = parseFloat(valorEntregue as string);

        if (isNaN(compra) || isNaN(entregue)) {
            res.status(400).json({ error: 'Os parâmetros valorCompra e valorEntregue devem ser números válidos.' });
            return;
        }

        const troco = trocoService(compra, entregue);

        res.status(200).json(troco);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao calcular o troco.' });
    }
}

export { trocoController };


