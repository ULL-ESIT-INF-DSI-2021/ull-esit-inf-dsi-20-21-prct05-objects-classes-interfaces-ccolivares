import { Article } from "./article";
import { BibliographicManager } from "./bibliographicmanager"

type Author = {
  authorName: string;
  email: string;
}

////////////// INSERTAR UN ARTICULO DE LA SIGUIENTE FORMA:

let title1: string = `A modified descent method-based heuristic for binary quadratic knapsack problems with conflict graphs`;

let authors1: Author[] = [];

let author11: Author = {
  authorName: "Isma Dahmani",
  email: "dahmani99@gmail.com"
};

let author12: Author = {
  authorName: "Mhand Hifi",
  email: "mhand.hifi.mail@gmail.com"
};

authors1.push(author11);
authors1.push(author12);

let keywords1: string[] = ["descent", "heuristic", "knapsack", "optimization"];

let abstract1: string = `The knapsack problem arises in a variety of real world applications, 
including flexible manufacturing systems, railway stations, hydrological studies and others. 
In this paper, we propose a descent method-based heuristic for tackling a special knapsack 
problem: the binary quadratic knapsack with conflict graphs. The proposed method combines (i) 
an intensification search with a descent method for enhancing the accuracy of the solutions 
and (ii) a diversification strategy which is used for enlarging the search space. The method 
uses degrading and re-optimization strategies in order to reach a series of diversified 
solutions. The performance of the proposed method is evaluated on benchmark instances taken 
from the literature, where its achieved results are compared to those reached by both GLPK 
solver and the best method available in the literature. The method seems very competitive, 
where it is able to achieve 37 new lower bounds.`;

let date1: string = "17/07/2019";

let editorial1: string = "Annals of Operations Research"

let mentions1: number = 2;

let article1: Article = new Article(title1, authors1, keywords1, abstract1, date1, editorial1, mentions1);

////////////////////////////// ARTICULO ////////////////////////////////////////////////////

let title2: string = `On exact solution approaches for bilevel quadratic 0–1 knapsack problem`;

let authors2: Author[] = [];

let author21: Author = {
  authorName: "Gabriel Lopez Zenarosa",
  email: "glzenarosa@gmail.com"
};

let author22: Author = {
  authorName: "Oleg A. Prokopyev",
  email: "olegap@gmail.com"
};

let author23: Author = {
  authorName: "Eduardo L. Pasiliao",
  email: "edulpasiliao@gmail.com"
};

authors1.push(author21);
authors1.push(author22);
authors1.push(author23);

let keywords2: string[] = ["bilevel programming", "bilevel knapsack problem", 
                          "quadratic knapsack problem", "dynamic programming"];

let abstract2: string = `We consider the bilevel quadratic knapsack problem (BQKP) that model 
settings where a leader appropriates a budget for a follower, who solves a quadratic 0–1 
knapsack problem. BQKP generalizes the bilevel knapsack problem introduced by Dempe and 
Richter (Cent Eur J Oper Res 8(2):93–107, 2000), where the follower solves a linear 0–1 
knapsack problem. We present an exact-solution approach for BQKP based on extensions of 
dynamic programs for QKP bounds and the branch-and-backtrack algorithm. We compare our 
approach against a two-phase method computed using an optimization solver in both phases: 
it first computes the follower’s value function for all feasible leader’s decisions, and 
then solves a single-level, value-function reformulation of BQKP as a mixed-integer 
quadratically constrained program. Our computational experiments show that our approach 
for solving BQKP outperforms the two-phase method computed by a commercial state-of-the-art 
optimization software package.`;

let date2: string = "04/08/2018";

let editorial2: string = "Annals of Operations Research"

let mentions2: number = 1;

let article2: Article = new Article(title2, authors2, keywords2, abstract2, date2, editorial2, mentions2);

/////////////////////////////////////////////////////////////////////////////////////

//Crear el vector de articulos que va en el gestor bibliografico
let biblioArticles: Article[] = [];

//Insertamos articulos 
biblioArticles.push(article1);
biblioArticles.push(article2);

//Creamos el objeto tipo bibliographicManager

let bibliographicManager: BibliographicManager = new BibliographicManager(biblioArticles);

bibliographicManager.writeTable();

bibliographicManager.wordFilter("bilevel");

article1.writeInAPA();