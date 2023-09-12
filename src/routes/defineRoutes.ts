import express from 'express';
import { createVeiculo } from '../controllers/veiculo/createVeiculo';
import { listVeiculos } from '../controllers/veiculo/listVeiculos';

const router = express.Router();

// Rota para criar um novo veículo
router.post('/veiculos', createVeiculo);

// Rota para listar todos os veículos
router.get('/veiculos', listVeiculos);

export default router;
