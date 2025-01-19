import { model, Schema } from "mongoose"

const menuSchema = Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Appetizers", "Main Course", "Desserts"],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    }
})

export const menuModel = model("Menu",menuSchema)