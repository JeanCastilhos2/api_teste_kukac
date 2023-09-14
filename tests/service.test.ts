import * as fs from 'fs';
import { cadastrarCarroService, cadastrarMotoService, listarVeiculosService } from '../src/service/veiculo/veiculoService';
import { Carro, Moto, Veiculo } from '../src/models/veiculoModel';

jest.mock('fs');

describe('Testes para o serviço de veículos', () => {
  it('Deve cadastrar um carro', () => {
    const carro: Carro = {
      "modelo": "teste",
      "anoFabricacao": 2023,
      "quantidadePortas": 2,
      "marca": "teste"
    }
    const veiculos: Veiculo[] = [];

    (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(veiculos));

    const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync');

    const resultado = cadastrarCarroService(carro);

    expect(resultado).toEqual(carro);
    expect(writeFileSyncMock).toHaveBeenCalled();
  });

  it('Deve cadastrar uma moto', () => {
    const moto: Moto = {
      "modelo": "teste",
      "anoFabricacao": 2022,
      "passageiros": 2,
      "marca": "teste",
      "rodas": 2
    }
    const veiculos: Veiculo[] = [];

    (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(veiculos));

    const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync');

    const resultado = cadastrarMotoService(moto);

    expect(resultado).toEqual(moto);
    expect(writeFileSyncMock).toHaveBeenCalled();
  });

  it('Deve listar os veículos', () => {
    const veiculos = [{}];

    (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(veiculos));

    const resultado = listarVeiculosService();

    expect(resultado).toEqual(veiculos);
  });
});
