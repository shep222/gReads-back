const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 7777

// const posts = require('./routes/posts')
// const comments = require('./routes/comments')
// const users = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
// app.use('/posts', posts)
// app.use('/comments', comments)
// app.use('/user', users)


app.listen(PORT, function () {
  console.log("Your GReads is running on port:" + PORT);
})
