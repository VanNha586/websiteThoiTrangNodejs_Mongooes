const Course = require("../models/course");
const Giay = require("../models/giay");
const Aovest = require("../models/aovest");
const Aokhoat = require("../models/aokhoat");
const Vay = require("../models/vay");
const Congso = require("../models/congso");
const Dep = require("../models/dep");
const Vo = require("../models/vo");
const All = require("../models/all");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
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
  product(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("products", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
  giay(req, res, next) {
    Giay.find({})
      .then((giays) => {
        res.render("giay", {
          giays: mutipleMongooseToObject(giays),
        });
      })
      .catch(next);
  }
  aovest(req, res, next) {
    Aovest.find({})
      .then((aovests) => {
        res.render("aovest", {
          aovests: mutipleMongooseToObject(aovests),
        });
      })
      .catch(next);
  }
  aokhoat(req, res, next) {
    Aokhoat.find({})
      .then((aokhoats) => {
        res.render("aokhoat", {
          aokhoats: mutipleMongooseToObject(aokhoats),
        });
      })
      .catch(next);
  }
  vay(req, res, next) {
    Vay.find({})
      .then((vays) => {
        res.render("vay", {
          vays: mutipleMongooseToObject(vays),
        });
      })
      .catch(next);
  }
  congso(req, res, next) {
    Congso.find({})
      .then((congsos) => {
        res.render("congso", {
          congsos: mutipleMongooseToObject(congsos),
        });
      })
      .catch(next);
  }
  dep(req, res, next) {
    Dep.find({})
      .then((deps) => {
        res.render("dep", {
          deps: mutipleMongooseToObject(deps),
        });
      })
      .catch(next);
  }
  vo(req, res, next) {
    Vo.find({})
      .then((vos) => {
        res.render("vo", {
          vos: mutipleMongooseToObject(vos),
        });
      })
      .catch(next);
  }
  all(req, res, next) {
    All.find({})
      .then((alls) => {
        res.render("all", {
          alls: mutipleMongooseToObject(alls),
        });
      })
    
      .catch(next);
  }
  contact(req, res) {
    res.render("contact");
  }
}
module.exports = new SiteController();
