import { configureStore } from '@reduxjs/toolkit';

import mainReducer from './mainReducer';

export const store = configureStore({
    reducer: 
    {
        mainReducer: mainReducer
    },
});

export type RootState = ReturnType<typeof store.getState>

export default store;