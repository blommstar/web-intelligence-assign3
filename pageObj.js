export default class Page {
  constructor(url) {
    this.url = url
    this.words = []
    this.pageRank = 1
  }

  indexWOrds(wordsBlob) {
    for (let word of wordsBlob) {
      this.words.push(word)
    }
    for (let word of wordsBlob) {
      wordsBlob = wordsBlob.filter(function (item, index) {
        return jobs.indexOf(item) >= index;
      })
    }
  }

  getWordId(word) {
    for (let aWord of this.words) {
      if (word == aWord) {
        return aWord.indexOf(aWord)
      }

      // add to this.words if not found??
    }
  }

  calcPageRank() {
    let pr = 0

    for (let i = 0; i < 20; i++) { // 20 is max iterations, can ba altered
      for (let page of PagesDB) {
        for (let page2 of PagesDB) {
          if (page2.hasLinkTo(page)) {
            // Sum of all pages 
            // FIXME: page rank algoritm (calcPageRank())
            pr += page2.pageRank / page2.getNoLinks() // PR Score divided w/ number of links
          }
        }
        page.pageRank = 0.85 * pr + 0.15
      }
    }
  }
} 