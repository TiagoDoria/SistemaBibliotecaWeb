import { BirthDateVO } from "./BirthDateVO.vo";
import { NameVO } from "./NameVO.vo";

export interface Author {
    id: string;               
    name: NameVO;             
    birthDate: BirthDateVO; 
  }
  