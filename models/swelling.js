import mongoose, { Schema } from "mongoose";

const swellingSchema = new Schema(
  {
    qsw1: String,
    qsw2: String,
    qsw3: String,
    qsw4: String,
    qsw5: String,
    qsw6: String,
    qsw7: String,
    qsw8: String,
    qsw9: String,
    qsw10: String,
    qsw11: String,
    qsw12: String,
    qsw13: String,
    qsw14: String,
    qsw15: String,
    qsw16: String,
    qsw17: String,
    qsw18: String,
    qsw19: String,
    qsw20: String,
    qsw21: String,
    qsw22: String,
    qsw23: String,
    qsw24: String,
    qsw25: String,
    qsw26: String,
    qsw27: String,
  },
  {
    timestamps: true,
  }
);

const Swelling =
  mongoose.models.Swelling || mongoose.model("Swelling", swellingSchema);

export default Swelling;
