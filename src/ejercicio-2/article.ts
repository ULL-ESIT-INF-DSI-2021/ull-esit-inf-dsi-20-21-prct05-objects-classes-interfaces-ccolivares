type Author = {
  authorName: string;
  email: string;
}

export class Article {

  constructor (public title: string, public author: Author[], public keywords: string[],
    public abstract: string, public fecha: string, public editorial: string, 
    private mentions: number){}


  writeInAPA(){

  }
}