
exports.up = (knex) => {
  return knex.schema.createTable('author_book', (author_book) => {
    author_book.integer('author_id').references('id').inTable('author');
    author_book.integer('book_id').references('id').inTable('book');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('author_book');
};
