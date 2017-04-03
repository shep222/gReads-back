require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/gReads_db',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },

};
