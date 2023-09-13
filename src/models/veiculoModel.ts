export interface Veiculo {
  modelo: string;
  anoFabricacao: number;
  marca: string;
}

export class Carro implements Veiculo {
  constructor(
    public modelo: string,
    public anoFabricacao: number,
    public quantidadePortas: number,
    public marca: string
  ) {
    if (quantidadePortas < 2 || quantidadePortas > 4) {
      throw new Error("Quantidade de portas inválida para um carro.");
    }
  }
}

export class Moto implements Veiculo {
  readonly rodas: number = 2;
  
  constructor(
    public modelo: string,
    public anoFabricacao: number,
    public marca: string,
    public passageiros: number
  ) {
    if (passageiros < 1 || passageiros > 2) {
      throw new Error("Número de passageiros inválido para uma moto.");
    }
  }
}
