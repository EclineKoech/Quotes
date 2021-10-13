export class Quote {
  showDescription: boolean;
  // id!:number;
  // name!: string;
  // description!: string;

  // showDescription: boolean;
  // constructor(public title:string,public name: string,public description: string,public author: string,public completeDate: Date){
  //     this.showDescription=false;
  // }

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
