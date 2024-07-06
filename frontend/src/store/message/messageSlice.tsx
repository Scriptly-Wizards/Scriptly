import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface CustomMessage {
  id: string;
  created_at: number;
  value: string;
}

interface MessageState {
  message: CustomMessage | null;
}

const initialState: MessageState = {
  message: null,
};

const messageSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<CustomMessage>) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;