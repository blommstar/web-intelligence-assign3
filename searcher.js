class Searcher {
  constructor(query, data) {
    this.query
    this.searchResults = []
    this.data = data
  }

  runQuery(queryString) {
    // For each page, calc metric value for each of the used metrics (0-1)
    // Calculate final score from the weighted som of the metric claculation
    const scores = {}
    for (let page of pageDB) {
      scores.frequncyScore[page] = getFrequncyScore(page, queryString)
      scores.locationScore[page] = getLocationScore(page, queryString)
    }
    normalize(scores.frequncyScore)
    normalize(scores.locationScore)

    for (let page of pageDB) {
      let score = 1 * scores.locationScore[page] + 0.5 * scores.locationScore
      scores.push({ page, score })
    }

    this.searchResults = scores.sort(a, b => { a.locationScore - b.locationScore })
    return this
  }

  getFequencyScore(word, pageObj) {
    // hash = {}
    // let words = query.split(' ')
    // words.forEach(function (i) { hash[i] = (hash[i] || 0) + 1; });
    // for (word of words) {
    //   hash[word] = this.words.filter((value) => {
    //     return value.toLowerCase() == word.toLowerCase()
    //   }).length
    // }
    // return hash
    return pageObj.words.filter((value) => {
      return value.toLowerCase() == word.toLowerCase()
    }).length
  }


}

module.exports = Searcher