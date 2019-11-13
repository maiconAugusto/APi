
exports.up = function(knex) {
    return knex.schema.createTable('localization', table => {
        table.increments('id').primary()
        table.string('latitude').notNull()
        table.string('longitude').notNull()
        table.string('latitudeDelta').notNull()
        table.string('longitudeDelta').notNull()
        table.integer('userId').references('id').inTable('users').notNull()
    })
};
exports.down = function(knex) {
    return knex.schema.dropTable('localization')
};
