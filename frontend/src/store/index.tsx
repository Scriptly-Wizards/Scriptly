import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import messageReducer from "./message/messageSlice";
import pdfReducer from "./pdf/pdfSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
    pdfFile: pdfReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export default store;