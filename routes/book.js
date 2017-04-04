const router = require('express').Router()
const db = require('../db/bookAPI')

router.get('/', (req, res) => {
    db.getBook()
    
    .orderBy('id', 'asc')
    .then((book) => {
        res.send(book)
    })
})

router.get('/:id', (req, res) => {
    db.getSingleBook(req.params.id)
        .then((book) => {
            res.send(book)
        })
})


router.post('/', (req, res) => {
    db.createBook(req.body)
        .then(() => {
            res.sendStatus(201)
        })
})

router.put('/:id', (req, res) => {
    db.editBook(req.params.id, req.body).then((id) => {
        res.send(`Updated Item ${id}`)
    })
})

router.delete('/:id', (req, res) => {
    db.deleteBook(req.params.id).then((id) => {
        res.send(`You deleted ${id}`)
    })
})


module.exports = router
