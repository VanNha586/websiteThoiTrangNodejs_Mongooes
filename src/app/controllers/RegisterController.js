const Course = require("../models/course");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class RegisterController {
  // [get] /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  //[get] /search

  register(req, res) {}
}
module.exports = new registerController();
