export class Pages {
  constructor() {
    this.pages = []
  }

  generatePages() {
    for (let page of pagesDB) {
      this.pages.push(new Page())
    }
  }


}