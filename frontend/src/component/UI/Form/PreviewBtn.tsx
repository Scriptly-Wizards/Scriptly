import React from 'react'
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/system';

interface PreviewBtnProps extends ButtonProps {
  isLoading: boolean;
  handleNextPage: () => void;
}

const PreviewButton = styled(Button)({
  margin: "20px auto",
  width: "20%",
  backgroundColor: "#2af0ea",
  color: "white",
  "&:hover": {
    backgroundColor: "#ee1d52",
  }
});

const PreviewBtn: React.FC<PreviewBtnProps> = ({ isLoading, handleNextPage }) => {
  return (
    <PreviewButton onClick={handleNextPage} disabled={isLoading}>
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 mr-3 text-white"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </>
      ) : (
        'Preview'
      )}
    </PreviewButton>
  )
}

export default PreviewBtn