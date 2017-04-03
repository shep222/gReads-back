const db = require('./knex')

module.exports = {
  getBook: () => db('book'),
  createBook: (newItem) => db('book').insert(newItem),
  editBook: (id, newItem) => db('book').where('id', id).update(newItem, 'id'),
  getSingleBook: (id) => db('book').where('id', id),
  deleteBook: (id) => db('book').where('id', id).del().returning('id')
}
