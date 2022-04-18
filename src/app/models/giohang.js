// dùng để tạo models khoá học

const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongoose_delete = require("mongoose-delete");
const { type } = require("express/lib/response");
const Schema = mongoose.Schema;
const Giohang = new Schema(
  {
    items:{
      name:{type: String},
      price:{type: String},
      decs:{type: String},
      image:{type: String},
    },
    totalItems: {type: String},
    totalPrice:{type: String},
  },
  {
    timestamps: true,
  },
);
//add plugin

module.exports = mongoose.model("Giohang", Giohang);
