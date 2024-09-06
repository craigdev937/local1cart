import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ShopAPI } from "./ShopAPI";

export const RED = configureStore({
    reducer: {
        [ShopAPI.reducerPath]: ShopAPI.reducer,
    },      // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(ShopAPI.middleware),
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


