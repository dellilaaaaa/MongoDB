const UserGetCourse = require("../models/UserGetCourse");

module.exports = {
  getAllUserGetCourse: async (req, res) => {
    try {
      const ambilAll = await UserGetCourse.find({}, "-__v").populate(
        "user course"
      );

      res.json(ambilAll);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  postUserGetCourse: async (req, res) => {
    try {
      let data = req.body;

      await UserGetCourse.create(data);

      res.json("user success get this course");

    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },

  getUserGetCourseByID: async (req, res) => {
    try {
      const { id } = req.params;
      const hasil = await UserGetCourse.findById(id, "-__v");

      res.json(hasil);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "internam Server Error",
      });
    }
  },

  deleteUserGetCourse: async (req, res) => {
    try {
      const { id } = req.params;
      await UserGetCourse.findByIdAndDelete(id);

      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
      });
    }
  },

  editUserGetCourse: async (req, res) => {
    try {
      const { id } = req.params;
      const update = {
        user: req.body.user,
        course: req.body.course,
        isFinish: req.body.isFinish,
      };
      await UserGetCourse.findByIdAndUpdate(id, update);
      res.json("success");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: err.message || "Internal Server Error",
      });
    }
  },
};
