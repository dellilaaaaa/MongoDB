const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/regis", async (req, res) => {
  try {
    const register = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(register.password, salt);
    register.password = hash;

    await User.create(register);

    res.json("register successful");
  } catch (error) {
    res.json({ message: error.message || "internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    dataLogin = req.body;

    const newUser = await User.findOne({ email: dataLogin.email });

    if (newUser) {
      const validatePassword = bcrypt.compareSync(
        dataLogin.password,
        newUser.password
      );

      if (validatePassword) {
        const { password, ...rest } = newUser.toObject();
        const token = jwt.sign(rest, process.env.JWT_KEY);

        return res.json({
          message: "success",
          token,
        });
      }
    }
    res.json("email or password invalid");
  } catch (error) {
    res.json({ message: error.message || "internal server error" });
  }
});

module.exports = router;
