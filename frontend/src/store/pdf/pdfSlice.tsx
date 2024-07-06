import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PdfState {
  pdfUrl: string | null;
  error: boolean;
}

const initialState: PdfState = {
  pdfUrl: null,
  error: false
};

const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    setPdfFile: (state, action: PayloadAction<string>) => {
      state.pdfUrl = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    }
  },
})

export const { setPdfFile, setError } = pdfSlice.actions;
export default pdfSlice.reducer;