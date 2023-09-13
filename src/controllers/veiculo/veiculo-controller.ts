import { Request, Response } from "express";
import { Carro, Moto } from "../../models/veiculoModel";
import {
  cadastrarCarroService,
  cadastrarMotoService,
  listarVeiculosService,
} from "../../service/veiculo/veiculoService";

export const cadastrarCarroController = (req: Request, res: Response) => {
  try {
    const { modelo, anoFabricacao, quantidadePortas, marca } = req.body;
    const carro = new Carro(modelo, anoFabricacao, quantidadePortas, marca);
    cadastrarCarroService(carro);
    res.status(201).json(carro);
  } catch (error) {
    res.status(400).json({ mensagem: "Não foi possível cadastrar o carro." });
  }
};

export const cadastrarMotoController = (req: Request, res: Response) => {
  try {
    const { modelo, anoFabricacao, marca, passageiros } = req.body;
    const moto = new Moto(modelo, anoFabricacao, marca, passageiros);
    cadastrarMotoService(moto);
    res.status(201).json(moto);
  } catch (error) {
    res.status(400).json({ mensagem: "Não foi possível cadastrar a moto." });
  }
};


export const listarVeiculosController = (req: Request, res: Response) => {
  const veiculos = listarVeiculosService();
  res.status(200).json(veiculos);
};
