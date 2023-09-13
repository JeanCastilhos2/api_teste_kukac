import express from 'express';
import { palindromosController } from '../controllers/palindromos/palindromosController';
import { cadastrarCarroController, cadastrarMotoController, listarVeiculosController } from '../controllers/veiculo/veiculo-controller';
import { trocoController } from '../controllers/troco/trocoController';

const router = express.Router();

// Rota para criar um novo Carro
router.post('/carro', cadastrarCarroController);

// Rota para criar um nova Moto
router.post('/moto', cadastrarMotoController);

// Rota para listar todos os Veículos
router.get('/veiculos', listarVeiculosController);

// Rota para buscar Palindromos
router.get('/palindromos', palindromosController);

//Rota para calcular o Troco
router.get('/troco', trocoController)

export default router;
