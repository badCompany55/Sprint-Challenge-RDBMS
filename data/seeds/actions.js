exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          act_name: "dependencies",
          act_desc: "Install dependencies required to run react and redux",
          act_notes: "Will be using react-router for easier endpoint managment",
          act_comp: false,
          act_pro_id: 1
        },
        {
          act_name: "refactor",
          act_desc: "Refactor to use hook for cleaner code",
          act_notes: null,
          act_comp: false,
          act_pro_id: 1
        },
        {
          act_name: "backend depend",
          act_desc: "Add dependencies for backend build",
          act_notes:
            "Include morgan, and helmet for quicker build time and better security",
          act_comp: false,
          act_pro_id: 2
        }
      ]);
    });
};
