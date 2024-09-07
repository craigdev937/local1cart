import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ShopAPI } from "./ShopAPI";
import { CartReducer } from "./CartSlice";

export const RED = configureStore({
    reducer: {
        cart: CartReducer,
        [ShopAPI.reducerPath]: ShopAPI.reducer,
    },      // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(ShopAPI.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


