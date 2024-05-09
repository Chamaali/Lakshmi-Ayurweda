import mongoose, {Schema} from "mongoose";

const productSchema = new Schema(
    {
        name: String,
        description: String,
        image: String,
        price: Number,
        size: String,
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;