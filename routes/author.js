const router = require('express').Router()
const db = require('../db/authorAPI')

router.get('/', (req, res) => {
   db.getAuthor().then((author) => {
     res.send(author)
   })
})

router.get('/:id', (req, res) => {
    db.getSingleAuthor(req.params.id).then((author) => {
        res.send(author)
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
