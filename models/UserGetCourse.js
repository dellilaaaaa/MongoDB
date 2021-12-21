const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

const userGetCourseSchema = new Schema({
  user: {
    type: Types.ObjectId,
    ref: "user",
  },
  course: {
    type: Types.ObjectId,
    ref: "course",
  },
  isFinish: Boolean,
});

const UserGetCourse = mongoose.model("user_get_course", userGetCourseSchema);

module.exports = UserGetCourse;
