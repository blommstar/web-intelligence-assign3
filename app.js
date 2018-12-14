//import { games, programming } from './dataToJson.mjs'

const data = require('./dataToJson.js')
const search = require('./searcher.js')
const express = require('express')

const app = express();
const port = process.env.PORT || 7777

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})



const gameWords = data.games
//const wordSearch = new search('and', gameWords)

// const programmingWords = data.programming
// const mergedWords = Object.assign({}, gameWords, programmingWords)

function fullFrequencyScore(searchQuery) {
  // let hash = {}
  let data = []
  for (let pageObj of gameWords) {
    data.push({ page: pageObj.url, frequncyScore: pageObj.getFrequncyScore(searchQuery) })
    // hash[pageObj.url] = pageObj.getFrequncyScore(searchQuery)
  }
  return data
}

let frequncyHash = fullFrequencyScore('and')

frequncyHash = frequncyHash.sort((a, b) => a.frequncyScore - b.frequncyScore)

console.log(frequncyHash.reverse())

// Get id for the word

// Return all page Obj containing the word

// Sort the returned page objects
// Content-Based ranking: word frequency metric



// Routes

app.get('/api', (req, res) => {
  res.json(gameWords)
})


app.get('/api/:frequencyScore', (req, res) => {

  let frequncyHash = fullFrequencyScore(req.params.frequencyScore)

  frequncyHash = frequncyHash.sort((a, b) => a.frequncyScore - b.frequncyScore).reverse()

  res.send(frequncyHash)
})


app.use(express.static('public'))