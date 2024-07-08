import ENVIRONMENT from "../../Environment";
import { Dispatch } from "@reduxjs/toolkit";
import { setError, setPdfFile } from "./pdfSlice";

export interface PdfReq {
  id: string;
}

export interface pdfFile {
  blob: Blob;
}

export const getPdfFile = (pdfReq: PdfReq) => {
  return async (dispatch: Dispatch) => {
    const fetchPdfFile = async () => {
      const response = await fetch(`${ENVIRONMENT.apiUrl}/assistant/pdf/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pdfReq),
      });
  
      if (!response.ok) {
        throw new Error('Sending message request failed');
      }
  
      const pdfFile = await response.blob();
      return pdfFile;
    }

    try {
      const file = await fetchPdfFile();
      const url = window.URL.createObjectURL(file);
      dispatch(setPdfFile(url));
    } catch (error) {
      dispatch(setError(true));
    }
  }
}