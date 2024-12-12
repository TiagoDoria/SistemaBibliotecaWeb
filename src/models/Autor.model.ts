import { DataNascimentoVO } from "./DataNascimentoVO.vo";
import { NomeVO } from "./NomeVO.vo";

export interface Autor {
    id: string;               
    nome: NomeVO;             
    nascimento: DataNascimentoVO; 
  }
  