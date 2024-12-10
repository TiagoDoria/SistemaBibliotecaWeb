import { Author } from "./Author.model";
import { Genre } from "./Genre.model";
import { NameVO } from "./NameVO.vo";
import { ReleaseDateVO } from "./ReleaseDateVO.vo";

export interface Livro {
    id: string; 
    name: NameVO; 
    releaseDate: ReleaseDateVO; 
    authorId: string; 
    author?: Author;
    genreId: string; 
    genre?: Genre; 
}