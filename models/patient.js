import mongoose, {Schema} from "mongoose";

const patientSchema = new Schema(
    {
        name: String,
        age:   String,
        district: String,
        town: String,
        address: String,
        phone: String,
        email: String,
        note: String,
        registered: Boolean
    },
    {
        timestamps: true,
    }
);

const Patient = mongoose.models.Patient || mongoose.model('Patient', patientSchema);

export default Patient;