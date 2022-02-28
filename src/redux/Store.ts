import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
    reducer: {
        location: locationReducer
    },
});

//export these to use in custom redux hooks to avoid repetition throghout components. See hooks.ts
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;