import mongoose, {Schema} from "mongoose";

const bookingSchema = new Schema(
    {
        category: String, //main, clinic, disease, service, wellness, beauticulture, constitution, yoga, acupuncture
        clinicName: String, // Forecare-galle, medicare-colombo
        diseaseName: String, //backpain
        serviceName: String, //clinic, phone, video
        wellnessName: String, //therapy
        beauticultureName: String, //foot, pedicure, manicure
        constitutionName: String, // vatha pitha, pitha kapha
        patientName: String,
        address: String,
        district: String,
        age: String,
        phone: String,
        email: String,
        comment: String,
    },
    {
        timestamps: true,
    }
);

const Clinic = mongoose.models.Clinic || mongoose.model('Clinic', clinicSchema);

export default Clinic;