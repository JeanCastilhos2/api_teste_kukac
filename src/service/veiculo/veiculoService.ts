import * as fs from "fs";
import { Veiculo, Carro, Moto } from "../../models/veiculoModel";

const DB_FILE = "db.json";

const lerDadosDoArquivo = (): Veiculo[] => {
  try {
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const salvarDadosNoArquivo = (veiculos: Veiculo[]) => {
  const data = JSON.stringify(veiculos, null, 2);
  fs.writeFileSync(DB_FILE, data);
};

export const cadastrarCarroService = (carro: Carro): Veiculo => {
  const veiculos = lerDadosDoArquivo();
  veiculos.push(carro);
  salvarDadosNoArquivo(veiculos);
  return carro;
};

export const cadastrarMotoService = (moto: Moto): Veiculo => {
  const veiculos = lerDadosDoArquivo();
  veiculos.push(moto);
  salvarDadosNoArquivo(veiculos);
  return moto;
};

export const listarVeiculosService = (): Veiculo[] => {
  return lerDadosDoArquivo();
};
