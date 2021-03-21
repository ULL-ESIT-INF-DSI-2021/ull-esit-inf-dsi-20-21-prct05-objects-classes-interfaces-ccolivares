import { Article } from "./article";
import { BibliographicManager } from "./bibliographicmanager"

type Author = {
  authorName: string;
  email: string;
}

////////////// INSERTAR UN ARTICULO DE LA SIGUIENTE FORMA:

let title1: string = `A modified descent method-based heuristic for binary quadratic 
knapsack problems with conflict graphs`;

let authors1: Author[] = [];

let author1: Author = {
  authorName: "Pepe",
  email: "pepe@pepe.es"
};

let author2: Author = {
  authorName: "Juan",
  email: "juan@juan.es"
};

authors1.push(author1);
authors1.push(author2);

let keywords1: string[] = ["tomate", "lechuga", "pan", "queso", "depresion"];

let abstract1: string = `Los gestores bibliográficos son herramientas que permiten almacenar,
tar y exportar artículos de investigación. Estos gestores permiten filtrar el contenido de su 
base de datos por los valores de los campos que tienen los artículos de investigación.`;

let fecha1: string = "01/01/2022";

let editorial1: string = "El malpais"

let mentions1: number = 15;

let article1: Article = new Article(title1, authors1, keywords1, abstract1, fecha1, editorial1, mentions1);

/////////////////////////////////////////////////////////////////////////////////////