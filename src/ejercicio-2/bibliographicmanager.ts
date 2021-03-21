import { Article } from "./article";

export class BibliographicManager {

  constructor (private articles: Article[]){
  }

  pushArticle(article: Article) {
    this.articles.push(article);
  }
}