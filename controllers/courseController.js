const Course = require("../models/Course");

module.exports = {
  getAllCourse: async (req, res) => {
    try {
      const courses = await Course.find({}, "-__v");

      res.json(courses);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  getCourseByID: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await Course.findById(id, "-__v");

      res.json(course);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  postCourse: async (req, res) => {
    try {
      let course = req.body;

      await Course.create(course);

      res.json("course has been created");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const { id } = req.params;
      await Course.findByIdAndDelete(id);

      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editCourse: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        name: req.body.name,
        price: req.body.price,
        module: req.body.module,
      };
      await User.findOneAndUpdate(id, update);
      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};
