const fs = require('fs')

class Page {
  constructor(url) {
    this.url = url
    this.words = []
    this.pageRank = 1
    this.frequncyScore = 0
  }

  getFrequncyScore(queryWord) {
    return this.words.filter((value) => {
      return value.toLowerCase() == queryWord.toLowerCase()
    }).length
  }

  setFrequncyScore(queryWord) {
    this.frequncyScore = this.words.filter((value) => {
      return value.toLowerCase() == queryWord.toLowerCase()
    }).length
    return this
  }


  getLocationMetric(queryWord) {
    score = 0
    for (let word of this.words) {
      if (word.toLowerCase() == queryWord.toLowerCase()) {
        score += indexOf(word)
      }
    }
    return score == 0 ? 10000 : score
  }

  indexWords(wordsArr) {
    for (let word of wordsArr) {
      this.words.push(word)
    }
    function filterDuplicates(arr) {
      return arr.filter(function (item, index) {
        return arr.indexOf(item) >= index;
      })
    }
    this.words = filterDuplicates(this.words)
    return this
  }

  getWordId(word) {
    for (let aWord of this.words) {
      if (word == aWord) {
        return aWord.indexOf(aWord)
      }
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

module.exports = Page