import mongoose, {Schema} from "mongoose";

const clinicSchema = new Schema(
    {
        name: String,
        address: String,
        district: String,
        province: String,
        phone: String,
        doctor: String,
        email: String,
        location: String,
        openDays: String,
        image: String
    },
    {
        timestamps: true,
    }
);

const Clinic = mongoose.models.Clinic || mongoose.model('Clinic', clinicSchema);

export default Clinic;