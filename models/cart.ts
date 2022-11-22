import mongoose, { Schema, model } from "mongoose";

const cartSchema = new Schema({
    details: [      //arreglo que va a englobar la cantidad que es un nro y el producto es un id.
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 0 },
        }
    ],
    total: { type: Number, default: 0 },  // queda en 0 para despues actualizarlo cuando modifiquemos el cart. (calculo)
});

const Cart = model("Cart", cartSchema);
export default Cart;
