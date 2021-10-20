const express = require("express");
const router = express.Router();
const controller = require("../controllers/todoController");



//get
router.get("/", controller.getAll);
router.get("/:id", controller.get);
//post
router.post("/", controller.add);
//delete
router.delete("/:id", controller.delete);
//update
router.put("/:id", controller.update);



module.exports = router;

