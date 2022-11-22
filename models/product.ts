import { Schema, model } from "mongoose";

const productSchema = new Schema({
    productName: String,
    stock: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
});

const Product = model("Product", productSchema); //hace referencia al schema del producto que esta en el mongo
export default Product;
