import express from 'express'

const app = new express()

app.use('/gators', express.static('public'))