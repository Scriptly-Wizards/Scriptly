import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CustomMessage {
  id: string;
  created_at: number;
  value: string;
}

interface DataState {
  message: CustomMessage | null;
}

const initialState: DataState = {
  message: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<CustomMessage>) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = dataSlice.actions;
export default dataSlice.reducer;