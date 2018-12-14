// const fs = require('fs')
// const Page = require('./pagesObj.js')
//import { Page } from './pageObj.mjs'
const Page = require('./pageObj.js')
const fs = require('fs')
const path = require('path')
// import { Pages } from './pagesObj.mjs'
// import fs from 'fs'
// import path from 'path'

// const PagesDB = new Pages



let fileNames = fs.readdirSync('./wikipedia/Words/Games/')

let fileNames2 = fs.readdirSync('./wikipedia/Words/Programming/')
// console.log(Array.from(fileNames))

function indexWords(fileNames) {
  let PagesDB = []

  for (let fileName of fileNames) {
    let pageObj = new Page()
    // console.log(fileName)
    pageObj.url = `https://www.wikipedia.org/wiki/${fileName}`
    pageObj.words = fs.readFileSync(`./wikipedia/Words/Games/${fileName}`, 'utf8').split(' ')
    //pageObj.indexWords(fs.readFileSync(`./wikipedia/Words/Games/${fileName}`, 'utf8').split(' '))
    // pageObj.indexWords(fs.readFileSync(`./wikipedia/Words/Games/${fileName}`, 'utf8').match(/\S+/g) || [])
    PagesDB.push(pageObj)
  }
  return PagesDB
}




module.exports = {
  games: indexWords(fileNames),
  //programming: indexWords(fileNames2)
}

// JSON.stringify(PagesDB)

// EXPORTERING AV JSONDB
// fs.writeFile('PagesDB.json', JSON.stringify(PagesDB), (err) => {
//   if (err) {
//     console.log('Fel inträffade', err)
//   }
//   console.log(`PagesDB skapad`)
// })
