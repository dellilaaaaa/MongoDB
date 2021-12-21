const express = require("express");
const router = express.Router();

const {
  getAllCourse,
  getCourseByID,
  postCourse,
  deleteCourse,
  editCourse,
} = require("../controllers/courseController");

router.get("/", getAllCourse);
router.get("/:id", getCourseByID);
router.post("/", postCourse);
router.delete("/:id", deleteCourse);
router.put("/:id", editCourse);

module.exports = router;
