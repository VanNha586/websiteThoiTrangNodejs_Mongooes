// dùng để tạo models khoá học

const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongoose_delete = require("mongoose-delete");
const Schema = mongoose.Schema;
const Vo = new Schema(
  {
    // maxlength là giới hạn ký tựu nhập vào
    //required là bắt buộc phải nhập

    name: { type: String, required: true },
    price: { type: Number, maxlength: 6000 },
    // videoid: {type:String, required: true,},
    // live: {type:String,},

    image: { type: String },
    decs: { type: String },
    //lưu thời gian tạo và thời gian cập nhật
    // createAt: {type: Date, default: Date.now},
    // updateAt: {type: Date, default: Date.now},
    // tạo slug để tạo khoá học, unique là không cho nhập khi nhậP trùng slug
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  },
);
//add plugin

module.exports = mongoose.model("Vo", Vo);
