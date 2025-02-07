import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            let payload = action.payload;
            const itemExists = state.items.find(item => item.id === payload.id);
            if (itemExists) {
                itemExists.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += payload.price;
            } else {
                state.items.push({
                    id: payload.id,
                    itemName: payload.name,
                    quantity: 1,
                    price: payload.price
                });
                state.totalQuantity += 1;
                state.totalPrice += payload.price;
            }
        },

        deleteItem: (state, action) => {
            const { id } = action.payload;
            const itemToRemove = state.items.find(item => item.id === id);
            if (itemToRemove) {
                state.items = state.items.filter(item => item.id !== id);
                state.totalQuantity -= itemToRemove.quantity;
                state.totalPrice -= (itemToRemove.price) * (itemToRemove.quantity);
            }
        },

        increaseItem: (state, action) => {
            const { id } = action.payload;
            const itemToIncrease = state.items.find(item => item.id === id);
            itemToIncrease.quantity += 1;
            state.totalPrice += itemToIncrease.price;
            state.totalQuantity += 1;
        },

        decreaseItem: (state, action) => {
            const { id } = action.payload;
            const itemToDecrease = state.items.find(item => item.id === id);
            itemToDecrease.quantity -= 1;
            state.totalPrice -= itemToDecrease.price;
            state.totalQuantity -= 1;
        },

        placeOrder: (action) => {
            const { cartItems, currentUserId, totalAmount } = action.payload;
            console.log(cartItems);

            // try {
            //     const response = axios.post("http://localhost:5000/api/order", {
            //         userId: currentUserId,
            //         items: cartItems,
            //         totalAmount
            //     });

            //     alert("Order placed successfully");
            //     console.log(response.data);
            // } catch (error) {
            //     alert("Error placing order");
            //     console.error("Error placing order:", error);
            // }
        }

    }

})

export const { addItem, deleteItem, increaseItem, decreaseItem, placeOrder } = cartSlice.actions;

export default cartSlice.reducer;

