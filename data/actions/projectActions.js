const db = require("../knex.js");

module.exports = {
  getProjectByID,
  allProjects,
  newProject,
  getActions,
  newAction
};

async function getProjectByID(id) {
  const project = await db("projects")
    .where("id", id)
    .first();
  const actions = await db("actions").where("act_pro_id", id);
  const newProject = { ...project, actions };
  return newProject;
}

function allProjects() {
  return db("projects");
}

function newProject(pro) {
  return db("projects").insert(pro);
}

function getActions() {
  return db("actions");
}

function newAction(act) {
  return db("actions").insert(act);
}
