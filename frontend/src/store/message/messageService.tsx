import { Dispatch } from "@reduxjs/toolkit";
import { CustomMessage, setMessage } from "./messageSlice";

/** sendMessage request body */
export interface MessageReq {
  keywords: string[];
  video_duration: string;
  video_type: string;
  purpose: string;
  tone_and_style: string;
  script_format: string;
};

export const sendMessageReq = (messageReq: MessageReq) => {
  return async (dispatch: Dispatch) => {
    
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/v1/assistant/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageReq),
      });

      if (!response.ok) {
        throw new Error('Sending message request failed');
      }

      const data = await response.json();
      return data;
    };

    try {
      const result = await fetchData();
      dispatch(setMessage(result.data as CustomMessage));
      console.log('Success');
    } catch(error) {
      console.log('Sent Failed');
    }
  }
}