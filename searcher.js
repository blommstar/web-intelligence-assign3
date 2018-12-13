export default class Searcher {
  constructor(query) {
    this.query
    this.searchResults = []
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


}