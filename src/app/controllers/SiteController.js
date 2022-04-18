const Course = require("../models/course");
const Contact = require("../models/contact");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // [get] /
  index(req, res, next) {
    // Course.find({}, function(err, courses){
    //     if(!err) {
    //         res.json(courses);
    //     }
    //   else{
    //     next(err);
    // }
    // });
    // cách 2
    Course.find({})
      .then((courses) => {
        res.render("home", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
    // res.render('home');
  }
  //[get] /search
  search(req, res) {
    res.render("search");
  }
  // [POST]/contact
  contact(req, res) {
    // res.json(req.body);
    const contact = new Contact(req.body);
    contact
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}
module.exports = new SiteController();
