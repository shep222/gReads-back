const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 7777
const cors = require('cors')
const book = require('./routes/book')
const author = require('./routes/author')


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/book', book)
app.use('/author', author)
// app.use('/user', users)


app.listen(PORT, function () {
  console.log("Your GReads is running on port:" + PORT);
})
