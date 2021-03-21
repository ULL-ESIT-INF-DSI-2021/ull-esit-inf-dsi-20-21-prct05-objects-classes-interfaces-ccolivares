type Author = {
  authorName: string;
  email: string;
}

export class Article {

  constructor (public title: string, public author: Author[], public keywords: string[],
    public abstract: string, public date: string, public editorial: string, 
    private mentions: number){}


  writeInAPA(): string{

    let authorstring: string = "";

    this.author.forEach((authors) => {
      authorstring += authors.authorName
    });

    return `${authorstring}. (${this.date}). ${this.title}. ${this.editorial}.`;
  }
}