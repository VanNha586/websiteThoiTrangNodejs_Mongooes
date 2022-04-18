const express = require("express");
const path = require("path");
const morgan = require("morgan");
var session = require('express-session');
const Cart = require('./app/models/cart')
const passportLocalMongoose =  require("passport-local-mongoose")
const Account= require("./app/models/account")
    const passport =  require("passport")
const   LocalStrategy  =  require("passport-local")
// dungf ddee chuyeen dooi post thanhf put
const methodOverride = require("method-override");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
const bodyParser = require("body-parser");
// const AccountModel = require("./app/models/account");
passport.serializeUser(Account.serializeUser());       //session encoding
passport.deserializeUser(Account.deserializeUser());   //session decoding
passport.use(new LocalStrategy(Account.authenticate()));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}))
app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});
app.use(function(req, res, next) {
  res.locals.cart = new Cart(req.session.cart || []); 
  next();
 });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.post("/register", (req, res, next) => {
//   const username = req.body.username;
//   const password = req.body.password;
//   AccountModel.create({
//     username: username,
//     password: password,
//   })
//     .then((data) => {
//       res.json("tao tai khoan thanh cong");
//     })
//     .catch((err) => {
//       res.status(500).json("loi that bai");
//     });
// });
// connect to db
db.connect();
//hiển thị logo
app.use(express.static(path.join(__dirname, "public")));
// http logger
app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());
app.use(methodOverride("_method"));
// template engine
app.engine(
  "hbs",
  handlebars({
    // dùng để tổi duôi file
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// routes init
route(app);


app.post("/login",passport.authenticate("local",{
  successRedirect:"/home",
  failureRedirect:"/login"
}),function (req, res){
},function isLoggedIn(req,res,next) {
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect("/login");
}
);



app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
