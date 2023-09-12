import express from 'express';
import { createVeiculo } from '../controllers/veiculo/createVeiculo';
import { listVeiculos } from '../controllers/veiculo/listVeiculos';
import { getPalindromos } from '../controllers/palindromos/getPalindromos';
import { getTroco } from '../controllers/troco/getTroco';

const router = express.Router();

// Rota para criar um novo veículo
router.post('/veiculos', createVeiculo);

// Rota para listar todos os veículos
router.get('/veiculos', listVeiculos);

// Rota para buscar palindromos
router.get('/palindromos', getPalindromos);

//Rota para calcular o troco
router.get('/troco', getTroco)

export default router;
