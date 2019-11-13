
module.exports = {

  client: 'postgresql',
  connection: {
    database: 'users',
    user:     'postgres',
    password: '030303'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};