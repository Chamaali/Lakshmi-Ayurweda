import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        role: { type: String, required: true }, // admin, patient
        firstName: { type: String, required: true },
        lastName: { type: String},
        email: { type: String, required: true, unique: true },
        phone: { type: String },
        password: { type: String, required: true  },
    }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;