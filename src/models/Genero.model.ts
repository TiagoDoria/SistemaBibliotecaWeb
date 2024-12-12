import { Livro } from "./Livro.model";
import { NomeVO } from "./NomeVO.vo";


export interface Genero {
    id: string; 
    nome: NomeVO; 
    livros: Livro[]; 
}