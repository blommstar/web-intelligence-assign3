import Page from './pageObj.js'

export default class Page {
  constructor() {
    this.pages = []
  }

  generatePages() {
    for (let page of pagesDB) {
      this.pages.push(new Page())
    }
  }


}