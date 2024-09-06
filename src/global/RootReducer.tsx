import { configureStore } from "@reduxjs/toolkit";

export const RED = configureStore({
    reducer: {
        shop: () => "Shopping!"
    }
});

export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


