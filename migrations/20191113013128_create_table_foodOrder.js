
exports.up = function(knex,promise) {
    return knex.schema.createTable('foodOrder',table => {
        table.increments('id').primary()
        table.string('price'),notNull()
        table.integer('userId').references('id').inTable('users').notNull()
    })
};
exports.down = function(knex,promise) {
    return knex.schema.dropTable('foodOrder')
};
