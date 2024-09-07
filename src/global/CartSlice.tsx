import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartState } from "../models/Interfaces";

const initialState: ICartState = {
    cartItems: JSON.parse(
        localStorage.getItem("cart")!
    ) || [],
    total: 0
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (
            state, 
            action: PayloadAction<ICart>
        ) => {
            const itemIndex = state.cartItems
                .findIndex((item) => item.id === 
                    action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                const item = {...action.payload, quantity: 1};
                state.cartItems.push(item);
                localStorage.setItem("cart", 
                    JSON.stringify(state.cartItems));
            }
        },
        removeFromCart: (
            state,
            action: PayloadAction<number>
        ) => {
            state.cartItems = state.cartItems
                .filter((item) => item.id !== 
                    action.payload);
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cartItems)
            );
        },
        increase: (
            state,
            action: PayloadAction<ICart>
        ) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity = cartItem.quantity + 1;
            };
        },
        decrease: (
            state,
            action: PayloadAction<ICart>
        ) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity = cartItem.quantity - 1;
            };
        },
        clearCart: (state) => {
            return {
                ...state,
                cartItems: []
            }
        }
    }
});

export const ACT = CartSlice.actions;
export const CartReducer = CartSlice.reducer;


