exports.up = function(knex) {
  return knex.schema.createTable('author', (author) => {
    book.increments()
    book.string('f_name')
    book.string('l_name')
    book.text('bio')
    book.string('photoUrl')
  })
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('author')
};
