const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Contact = new Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    address: { type: String },
    phone: { type: String },
    comment: { type: String },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Contact", Contact);
