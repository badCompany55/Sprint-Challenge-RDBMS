exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          pro_name: "Front End",
          pro_desc: "Build a appealing interactive design for the user",
          pro_comp: false
        },
        {
          pro_name: "Back End",
          pro_desc: "Build a functioning api with express",
          pro_comp: false
        }
      ]);
    });
};
