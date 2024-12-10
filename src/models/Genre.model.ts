import { Livro } from "./Book.model";
import { NameVO } from "./NameVO.vo";

export interface Genre {
    id: string; 
    name: NameVO; 
    livros: Livro[]; 
}