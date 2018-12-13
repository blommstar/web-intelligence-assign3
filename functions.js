export default class Functions {
  constructor(scores, smallIsBetter) { // [], bool
    this.scores = scores
    this.smallIsBetter = true
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