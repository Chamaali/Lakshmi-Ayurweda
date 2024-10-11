import mongoose, {Schema} from "mongoose";

const appointmentSchema = new Schema(
    {
        consultation: String, 
        plan: String,
        name: String,
        age: String,
        gender: String,
        phone: String,
        email: String,
        total: Number,
        paymentMethod: String,
        cardNumber: String,
        cardExpire: String,
        cvv: String,
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema);

export default Appointment;