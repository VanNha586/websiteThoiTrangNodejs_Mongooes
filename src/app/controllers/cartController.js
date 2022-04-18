const Course = require("../models/course");
const Giohang = require("../models/giohang");
const Giay = require("../models/giay");
const Aovest = require("../models/aovest");
const Aokhoat = require("../models/aokhoat");
const Vay = require("../models/vay");
const Congso = require("../models/congso");
const Dep = require("../models/dep");
const Vo = require("../models/vo");
const All = require("../models/all");
const { mongooseToObject } = require("../../util/mongoose");
const Cart = require("../models/cart");
const fs = require("fs");
const session = require("express-session");
const giohang = require("../models/giohang");
class cartController {
  addCart(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Course.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/");
    });
  }
  addCartproduct(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Course.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/product/product");
    });
  }
  addCartgiay(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Giay.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/product/giay");
    });
  }
  addCartaovest(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Aovest.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/product/aovest");
    });
  }
  addCartaokhoat(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Aokhoat.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/product/aokhoat");
    });
  }
  addCartvay(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Vay.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/product/vay");
    });
  }
  addCartcongso(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Congso.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/product/congso");
    });
  }
  addCartdep(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Dep.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/product/dep");
    });
  }
  addCartvo(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    Vo.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/product/vo");
    });
  }
  addCartall(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    All.findById(productId, function (err, product) {
      if (err) {
        return res.redirect("/");
      }
      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect("/product/all");
    });
  }
  cart(req, res, next) {
    if (!req.session.cart) {
      return res.render("cart", {
        Course: null,
      });
    }
    var cart = new Cart(req.session.cart);
    res.render("cart", {
      title: "NodeJS Shopping Cart",
      Course: cart.getItems(),
      totalPrice: cart.totalPrice,
    });
  }
  removeCart(req, res, next) {
    var productId =  req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.remove(productId);
    req.session.cart = cart;
    console.log("xoá thành công");
    res.redirect("/cart");
  }
  payCart(req, res, next) {
    res.render("payCart");
  }
}
module.exports = new cartController();
