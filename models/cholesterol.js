import mongoose, { Schema } from "mongoose";
// import monoose,{Schema} from "mongoose";

const cholesterolSchema = new Schema(
  {
    qc1: String,
    qc2: String,
    qc3: String,
    qc4: String,
    qc5: String,
    qc6: String,
    qc7: String,
    qc8: String,
    qc9: String,
    qc10: String,
    qc11: String,
    qc12: String,
    qc13: String,
    qc14: String,
    qc15: String,
    qc16: String,
    qc17: String,
    qc18: String,
    qc19: String,
    qc20: String,
    qc21: String,
    qc22: String,
    qc23: String,
    qc24: String,
    qc25: String,
    qc26: String,
    qc27: String,
    qc28: String,
    qc29: String,
    qc30: String,
    qc31: String,
  },
  {
    timestamps: true,
  }
);

const Cholesterol =
  mongoose.models.Cholesterol ||
  mongoose.model("Cholesterol", cholesterolSchema);

export default Cholesterol;
