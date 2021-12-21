const express = require("express");
const route = express.Router();

const userRouter = require("./userRouter");
const courseRouter = require("./courseRouter");
const userGetCourse = require("./userGetCourse");
const authRouter = require("./authRouter");
const validateToken = require("../middleware/validated");

route.get("/", (req, res) => {
  res.json("ini halaman utama");
});

route.get("/auth", authRouter)

route.use(validateToken)

route.use("/user", userRouter);
route.use("/course", courseRouter);
route.use("/userGetCourse", userGetCourse);

module.exports = route;
