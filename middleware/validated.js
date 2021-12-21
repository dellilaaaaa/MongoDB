require("dotenv").config();

const jwt = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    const token = auth.split(" ")[1];

    if (token) {
      const payload = jwt.verify(token, process.env.JWT_KEY);

      req.payload = payload;

      next();
    }
  } catch (error) {
    console.log(error.message);
    res.json("Invalid token");
  }
};

module.exports = validateToken
