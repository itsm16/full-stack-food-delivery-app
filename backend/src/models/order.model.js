import { model, Schema } from "mongoose";


const orderSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Menu",
            required: true
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["pending", "completed", "cancelled"],
        default: "pending"
    }
});

export const orderModel = model("Order", orderSchema);

