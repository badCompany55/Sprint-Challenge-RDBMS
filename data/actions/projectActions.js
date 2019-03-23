const db = require("../knex.js");

module.exports = {
  getProjectByID
};

async function getProjectByID(id) {
  const project = await db("projects")
    .where("id", id)
    .first();
  const actions = await db("actions").where("act_pro_id", id);
  const newProject = { ...project, actions };
  return newProject;
}
