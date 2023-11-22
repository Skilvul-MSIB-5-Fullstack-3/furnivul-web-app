const express = require("express");
const router = express.Router();

const reviewController = require("../../controllers/review/review.controller.js");
const { auth } = require("../../middleware/auth");

router.get("/", reviewController.getAllData);
router.get("/:id", auth, reviewController.getDatabyID);
router.put("/:id", auth, reviewController.updateData);
router.delete("/:id", auth, reviewController.deleteData);
router.post("/", auth, reviewController.addData);

module.exports = router;
