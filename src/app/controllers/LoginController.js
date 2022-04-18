const Account = require("../models/account");
const bcrypt = require("bcrypt");
const session = require("express-session");
const saltRounds = 10;
const { mutipleMongooseToObject } = require("../../util/mongoose");
// const AccountModel = require("../models/account");

class LoginController {
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
  //[GET] /search
  login(req, res) {
    res.render("login_sigup");
  }

  // [POST]/register
  register(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    try {
      Account.findOne({ username: req.body.username }, (err, user) => {
        if (user == null) {
          bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
              // Store hash in your password DB.
              const newUser = new Account({
                username: req.body.username,
                password: hash,
              });
              // res.json(newUser);
              newUser
                .save()
                .then(() => res.redirect("/login/login"))
                .catch((error) => {});
            });
          });
        } else {
          res.status(404).json("Email da ton` tai.");
        }
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  // [POST ] login

  loginUser(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    // tim` user trong database
    const user = Account.findOne({ username }).exec(function (err, user) {
      if (err) {
        return res.json({ err });
      } else if (!user) {
        return res.json({ err: "username or password khong dung" });
      }
      bcrypt.compare(password, user.password, (err, result) => {
        // result == true
        if (result === true) {
          console.log("dang nhap thanh cong");
          // res.redirect("/");
        } else {
          // return res.status(404).json({ err: "username or password khong chinh xac" }
          // );
          console.log("tai khoan hoac mat khau khong dung");
        }
      });
    });
  }
}
module.exports = new LoginController();
