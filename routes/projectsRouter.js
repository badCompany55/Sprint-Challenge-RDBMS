const express = require("express");
const db = require("../data/actions/projectActions.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await db.allProjects();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db.getProjectByID(id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const { pro_name, pro_desc } = req.body;
  const project = req.body;
  try {
    if (pro_name && pro_desc && pro_name !== "" && pro_desc !== "") {
      console.log(project);
      const theproject = await db.newProject(project);
      res.status(201).json(theproject);
    } else {
      res.status(400).json({ Error: "The name and description are required" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
