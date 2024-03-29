/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('student').del();
  await knex('student').insert([
    { first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com' },
    { first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@example.com' },
    { first_name: 'Alice', last_name: 'Smith', email: 'alice.smith@example.com' },
    { first_name: 'Bob', last_name: 'Johnson', email: 'bob.johnson@example.com' },
    { first_name: 'Emily', last_name: 'Brown', email: 'emily.brown@example.com' },
    { first_name: 'David', last_name: 'Jones', email: 'david.jones@example.com' },
    { first_name: 'Olivia', last_name: 'Williams', email: 'olivia.williams@example.com' },
    { first_name: 'Michael', last_name: 'Taylor', email: 'michael.taylor@example.com' },
    { first_name: 'Sophia', last_name: 'Martinez', email: 'sophia.martinez@example.com' },
    { first_name: 'William', last_name: 'Anderson', email: 'william.anderson@example.com' }
  ]);
};
