export default class Functions {
  constructor(scores, smallIsBetter) { // [], bool
    this.scores = scores
    this.smallIsBetter = true
  }

  calcPageRank() {
    let pr = 0;

    for (let i = 0; i < 20; i++) {
      // 20 is max iterations, can ba altered
      for (let page of PagesDB) {
        for (let page2 of PagesDB) {
          if (page2.hasLinkTo(page)) {
            // Sum of all pages
            // FIXME: page rank algoritm (calcPageRank())
            pr += page2.pageRank / page2.getNoLinks(); // PR Score divided w/ number of links
          }
        }
        page.pageRank = 0.85 * pr + 0.15;
      }
    }
  }

  normalize() {
    if (smallIsBetter) {
      let min = Math.min(...this.scores)

      for (let score of this.scores) {
        score = min / Math.max(...this.scores)
        score = 0 ? 0.00001 : score
      }

    } else { // If high values are considered better
      let max = Math.max(...this.scores)
      for (let score of this.scores) {
        score = score / max
      }
    }

  }
}