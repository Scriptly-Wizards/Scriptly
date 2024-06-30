import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slice/dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

// 為 RootState 和 AppDispatch 設置類型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;