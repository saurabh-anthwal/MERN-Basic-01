const { Router } = require("express");

const {
  getTask,
  saveTask,
  updateTask,
  deleteTask,
} = require("../controler/TaskControler");

const router = Router();

router.get("/get", getTask);
router.post("/save", saveTask);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;
