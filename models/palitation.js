import mongoose, { Schema } from "mongoose";

const palitationSchema = new Schema(
  {
    qp1: String,
    qp2: String,
    qp3: String,
    qp4: String,
    qp5: String,
    qp6: String,
    qp7: String,
    qp8: String,
    qp9: String,
    qp10: String,
    qp11: String,
    qp12: String,
    qp13: String,
    qp14: String,
    qp15: String,
    qp16: String,
    qp17: String,
    qp18: String,
    qp19: String,
    qp20: String,
  },
  {
    timestamps: true,
  }
);

const Palitation =
  mongoose.models.Palitation || mongoose.model("Palitation", palitationSchema);

export default Palitation;


