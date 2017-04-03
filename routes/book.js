const router = require('express').Router()
const db = require('../db/bookAPI')

router.get('/', (req, res) => {
   db.getBook().then((book) => {
     res.send(book)
   })
})

router.get('/:id', (req, res) => {
    db.getSingleBook(req.params.id).then((book) => {
        res.send(book)
    })
})

router.post('/', (req, res) => {
    db.createUser(req.body.userId)
    .then(() =>{
    database.createComments(req.body).then(() => {
  })
        .then (()=> {
          res.sendStatus(201)
        })
    })
})

router.patch('/:id', (req, res) => {
    database.editComments(req.params.id, req.body).then((id) => {
        res.send(`Updated Item ${id}`)
    })
})

router.delete('/:id', (req, res) => {
  database.deleteComments(req.params.id).then((id) => {
    res.send(`You deleted ${id}`)
  })
})


module.exports = router
