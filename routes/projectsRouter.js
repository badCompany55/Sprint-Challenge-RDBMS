const express = require("express");
const db = require("../data/actions/projectActions.js");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await db.getProjectByID(id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
