/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('student', (table) => {
        table.increments('id');
        table.string('first_name').notNullable();
        table.string('last_name').unsigned().defaultTo(0);
        table.timestamps(true, true) ;
        table.string('email').notNullable();

    }) ;

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('student') ;
};
