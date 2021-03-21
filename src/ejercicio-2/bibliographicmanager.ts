import { Article } from "./article";

export class BibliographicManager {

  constructor (private articles: Article[]){
  }

  writeTable() {
    console.table(this.articles, ["title", "date"]);
  }

  wordFilter(key: string) {

    let filteredArticles: Article[] = [];
    
    this.articles.forEach((article) => {
      
      let searched: boolean = false;
      let author: string = "";

      article.author.forEach((authors) => {
        author += authors
      });

      let editorial: string = article.editorial;

      let date: string = article.date;

      let keywords: string = article.keywords.join("");

      if (author.search(key) != -1) {
        searched = true;
      }

      if (editorial.search(key) != -1) {
        searched = true;
      }

      if (date.search(key) != -1) {
        searched = true;
      }

      if (keywords.search(key) != -1) {
        searched = true;
      }

      if (searched) {
        filteredArticles.push(article);
      }

    });

    console.table(filteredArticles, ["title", "date"]);
    console.log(this.exportFilteredAPA(filteredArticles));
  }

  exportFilteredAPA(filteredArticles: Article[]): string[] {
    let APA: string[] = [];

    filteredArticles.forEach((article) => {
      APA.push(article.writeInAPA());
    });

    return APA;

  }
}

