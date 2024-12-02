const mongoose = require("mongoose");

const taskModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
  },
  { collection: "task", timestamps: true }
);

// Create a model
module.exports = mongoose.model("task", taskModel);