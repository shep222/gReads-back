exports.up = function(knex) {
  return knex.schema.createTable('book', (book) => {
    book.increments()
    book.string('title')
    book.string('genre')
    book.text('description')
    book.string('coverUrl')
  })
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('book')
};
