import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  id: string;
  content: { text: { annotations: any[], value: string }, type: string }[];
  created_at: number;
  role: string;
  run_id: string | null;
  status: string | null;
}

interface DataState {
  message: Message[] | null;
}

const initialState: DataState = {
  message: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<Message[]>) => {
      state.message = action.payload;
    },
  },
});

export const { setMessage } = dataSlice.actions;
export default dataSlice.reducer;