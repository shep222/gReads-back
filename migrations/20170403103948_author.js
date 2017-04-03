exports.up = function(knex) {
  return knex.schema.createTable('author', (author) => {
    author.increments()
    author.string('f_name')
    author.string('l_name')
    author.text('bio')
    author.string('photoUrl')
  })
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('author')
};
