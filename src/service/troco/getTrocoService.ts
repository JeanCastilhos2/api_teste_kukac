import { Troco } from "../../models/trocoModel";

function getTrocoService(valorCompra: number, valorEntregue: number): Troco {
    const troco: Troco = {
      valorCompra,
      valorEntregue,
      quantidadeNotas1: 0,
      quantidadeNotas10: 0,
      quantidadeNotas100: 0,
    };
  
    let valorTroco = valorEntregue - valorCompra;
  
    while (valorTroco > 0) {
      if (valorTroco >= 100) {
        troco.quantidadeNotas100++;
        valorTroco -= 100;
      } else if (valorTroco >= 10) {
        troco.quantidadeNotas10++;
        valorTroco -= 10;
      } else {
        troco.quantidadeNotas1++;
        valorTroco -= 1;
      }
    }
  
    return troco;
  }
  
  export { getTrocoService };
  