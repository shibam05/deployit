// import express from "express"
require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('You are in Home :)')
})

app.get('/login', (req, res) => {
    res.send('<h1 background-color: black >you should login</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

