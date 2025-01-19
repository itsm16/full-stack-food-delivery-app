import { createSlice } from "@reduxjs/toolkit";

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
                state.totalQuantity -= 1;
                state.totalPrice -= itemToRemove.price;
            }
        },

        increaseItem: (state, action) => {
            
        },

        placeOrder: (state, action) => {
            

        }

    }

})

export const { addItem, deleteItem, increaseItem, placeOrder } = cartSlice.actions;

export default cartSlice.reducer;

