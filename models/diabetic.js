// import mongoose, { Mongoose } from "mongoose";
import mongoose, { Schema } from "mongoose";

const diabeticSchema = new Schema(
  {
    qd1: String,
    qd2: String,
    qd3: String,
    qd4: String,
    qd5: String,
    qd6: String,
    qd7: String,
    qd8: String,
    qd9: String,
    qd10: String,
    qd11: String,
    qd12: String,
    qd13: String,
    qd14: String,
    qd15: String,
    qd16: String,
    qd17: String,
    qd18: String,
    qd19: String,
    qd20: String,
    qd21: String,
    qd22: String,
  },

  {
    timestamps: true,
  }
);

const Diabetic =
  mongoose.models.Diabetic || mongoose.model("Diabetic", diabeticSchema);

export default Diabetic;
