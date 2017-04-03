const db = require('./knex')

module.exports = {
  getAuthor: () => db('author'),
  createAuthor: (newItem) => db('author').insert(newItem),
  editAuthor: (id, newItem) => db('author').where('id', id).update(newItem, 'id'),
  getSingleAuthor: (id) => db('author').where('id', id),
  deleteAuthor: (id) => db('author').where('id', id).del().returning('id')
}
