// const fs = require('fs')
// const Page = require('./pagesObj.js')
import { Page } from './pageObj.mjs'
import { Pages } from './pagesObj.mjs'
import fs from 'fs'
import path from 'path'

// const PagesDB = new Pages
const PagesDB = []


let fileNames = fs.readdirSync('./wikipedia/Words/Games/')

for (let fileName of fileNames) {
  const pageObj = new Page()
  // console.log(fileName)
  pageObj.url = `https://www.wikipedia.org/wiki/${fileName}`
  //pageObj.words = fs.readFileSync(`./wikipedia/Words/Games/${fileName}`, 'utf8').split(' ')
  pageObj.indexWords(fs.readFileSync(`./wikipedia/Words/Games/${fileName}`, 'utf8').split(' '))

  PagesDB.push(pageObj)
}



fs.writeFile('PagesDB.json', JSON.stringify(PagesDB), (err) => {
  if (err) {
    console.log('Fel inträffade', err)
  }
  console.log(`PagesDB skapad`)
})
