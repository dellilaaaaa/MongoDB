const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  postUser,
  deleteUser,
  editUser,
} = require("../controllers/userControllers");

router.get("/", getAllUser);

router.get("/:id", getUserByID);

router.post("/", postUser);

router.delete("/:id", deleteUser);

router.put("/:id", editUser);

module.exports = router;
