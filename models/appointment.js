import mongoose, {Schema} from "mongoose";

const appointmentSchema = new Schema(
    {
        name: String,
        age: Number,
        gender: String,
        phone: String,
        email: String,
        typeOfConsultation: String,
        typeofPackage: String,
        totalAmount: String,
        url: String,
        checked: { type: Boolean, default: false }
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);

export default Appointment;