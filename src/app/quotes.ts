export class Quotes {
  showDescription: boolean;
  
  constructor(
    public title: string,
    public name: string,
    public author: string,
    public description: string,
    public likes: number,
    public dislikes: number,
    public postDate: Date
  ) {
    this.showDescription = false;
  }
}
