import { model, Schema } from "mongoose";

const orderSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: "Menu"
        }
    ],
    totalAmount: Number,
    orderStatus: {
        type: String,
        enum: ["pending", "completed", "cancelled"]
    }
})


export const orderModel = model("Order", orderSchema)
