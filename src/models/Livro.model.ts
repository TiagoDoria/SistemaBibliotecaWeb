import { Autor } from "./Autor.model";
import { DataLancamentoVO } from "./DataLancamentoVO.vo";
import { Genero } from "./Genero.model";
import { NomeVO } from "./NomeVO.vo";


export interface Livro {
    id: string; 
    nome: NomeVO; 
    dataLancamento: DataLancamentoVO; 
    autorId: string; 
    autor?: Autor;
    generoId?: string; 
    genero?: Genero; 
}