exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", tb => {
    tb.increments();
    tb.string("pro_name", 128)
      .notNullable()
      .unique();
    tb.string("pro_desc", 300).notNullable();
    tb.boolean("pro_comp").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableifExists("projects");
};
