const express = require("express");
const db = require("../data/actions/projectActions.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const actions = await db.getActions();
    res.status(200).json(actions);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const { act_pro_id, act_name, act_desc } = req.body;
  const action = req.body;
  console.log(action);
  try {
    if (
      act_pro_id &&
      act_name &&
      act_desc &&
      act_pro_id !== "" &&
      act_name !== "" &&
      act_desc !== ""
    ) {
      const theaction = await db.newAction(action);
      res.status(201).json(theaction);
    } else {
      res.status(400).json({
        Error:
          "The project id, action name, and action description are required"
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
