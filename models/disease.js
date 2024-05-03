import mongoose, {Schema} from "mongoose";

const diseaseSchema = new Schema(
    {
        name: String,
        description :   String,
        image: String,
    },
    {
        timestamps: true,
    }
);

const Disease = mongoose.models.Disease || mongoose.model('Disease', diseaseSchema);

export default Disease;