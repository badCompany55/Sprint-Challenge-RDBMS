exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", tb => {
    tb.increments();
    tb.integer("act_pro_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tb.string("act_name", 128).notNullable();
    tb.string("act_desc", 300).notNullable();
    tb.string("act_notes", 300);
    tb.boolean("act_comp")
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
