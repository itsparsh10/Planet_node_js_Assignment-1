import mongoose from "mongoose";

const planetSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    circumference: {
      type: Number,
      required: true,
    },
    distancefromsun: {
      type: Number,
      required: true,
    },
    distancefromearth: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const planetModel = mongoose.model("Planetassignment",planetSchema)

export default planetModel