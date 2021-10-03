const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    newsTitle: { type: String, required: true },
    newsTitle: { type: String, required: true},
    newsContent: { type: HTMLAllCollection, required: true},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema);
