const meRouter = require("./me");
const courseRouter = require("./course");
const siteRouter = require("./site");
const loginRouter = require("./login");
const productRouter = require("./product");
const addCart = require('./addCart')
function route(app) {

  app.use("/login", loginRouter);
  app.use("/me", meRouter);
  app.use("/add", addCart);
  app.use("/remove", addCart);
  app.use("/cart", addCart);
  app.use("/courses", courseRouter);
  app.use("/product", productRouter);
  app.use("/contact", productRouter);
  app.use("/", siteRouter);
}
module.exports = route;
