interface Veiculo {
    modelo: string;
    anoFabricacao: number;
    quantidadePortas?: number;
    marca: string;
    rodas?: number;
    passageiros?: number;
  }
  
  class Carro implements Veiculo {
    modelo: string;
    anoFabricacao: number;
    quantidadePortas: number;
    marca: string;
  
    constructor(modelo: string, anoFabricacao: number, quantidadePortas: number, marca: string) {
      this.modelo = modelo;
      this.anoFabricacao = anoFabricacao;
      if (quantidadePortas >= 2 && quantidadePortas <= 4) {
        this.quantidadePortas = quantidadePortas;
      } else {
        throw new Error('A quantidade de portas deve estar entre 2 e 4 para um carro.');
      }
      this.marca = marca;
    }
  }
  
  class Moto implements Veiculo {
    modelo: string;
    anoFabricacao: number;
    marca: string;
    rodas: number;
    passageiros: number;
  
    constructor(modelo: string, anoFabricacao: number, marca: string, rodas: number, passageiros: number) {
      this.modelo = modelo;
      this.anoFabricacao = anoFabricacao;
      this.rodas = rodas;
      this.passageiros = passageiros;
      this.marca = marca;
    }
  }
  
  export { Veiculo, Carro, Moto };
  