import mongoose, {Schema} from "mongoose";

const doctorSchema = new Schema(
    {
        name: String,
        title: String,
        description: String,
        image: String,
        phone: String,
        clinicName: String,
        clinicLocation: String,
        clinicPhone: String,
    }
);

const Doctor = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);

export default Doctor;