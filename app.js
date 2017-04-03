const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 7777

const book = require('./routes/book')
const author = require('./routes/author')
// const users = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/book', book)
app.use('/author', author)
// app.use('/user', users)


app.listen(PORT, function () {
  console.log("Your GReads is running on port:" + PORT);
})
