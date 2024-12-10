import { BirthDateVO } from "./BirthDateVO";
import { NameVO } from "./NameVO";

export interface Author {
    id: string;               
    name: NameVO;             
    birthDate: BirthDateVO; 
  }
  